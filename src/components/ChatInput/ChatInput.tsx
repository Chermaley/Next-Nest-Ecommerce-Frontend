import React, { FormEvent, useState } from "react";
import styles from "./ChatInput.module.scss";
import Image from "next/image";

type InputFormProps = {
  onInputFormSubmit: (value: string, files: ChatFile[]) => void
}

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve) => {
    let baseURL
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      baseURL = reader.result
      resolve(baseURL)
    }
  })
}

export type ChatFile = {
  content: string
  type: string
  name: string
}

const ChatInput: React.FC<InputFormProps> = ({ onInputFormSubmit }) => {
  const [value, setValue] = useState('')
  const [files, setFiles] = useState<ChatFile[]>([])
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  const formRef = React.useRef<HTMLFormElement>(null)

  const onChangeText = (value: string) => {
    setValue(value)
  }

  const onSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    if (value.trim()) {
      onInputFormSubmit(value, files)
      setValue('')
      setFiles([])
    }
  }

  const onEnterPress = (e: any) => {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault()
      onSubmit()
    }
  }

  const onFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      const file = event.target.files[0]
      const base64 = await getBase64(file)
      if (base64) {
        setFiles([
          ...files,
          { content: base64.toString(), type: file.type, name: file.name },
        ])
      }
    }
  }

  return (
    <form ref={formRef} className={styles.container} onSubmit={onSubmit}>
      <textarea
        placeholder="Введите сообщение"
        rows={1}
        onKeyDown={onEnterPress}
        className={styles.textArea}
        ref={textareaRef}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
      />
      <input
        className={styles.fileInput}
        type="file"
        id="file"
        onChange={onFile}
        multiple
      />
      <label htmlFor="file">
        <Image src="/attachIcon.svg" width={30} height={30} alt="attach" />
      </label>
      <button type="submit" className={styles.button}>
        <Image src="/sendIcon.svg" width={20} height={20} alt="send" />
      </button>
    </form>
  )
}

export default ChatInput
