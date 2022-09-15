import React, { FormEvent, useState } from "react";
import styles from "./ChatInput.module.scss";

type InputFormProps = {
  onInputFormSubmit: (value: string, files: ChatFile[]) => void;
  onTyping: () => void;
  onInputFocus: () => void;
};

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve) => {
    let baseURL;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      baseURL = reader.result;
      resolve(baseURL);
    };
  });
};

export type ChatFile = {
  content: string;
  type: string;
  name: string;
};

const ChatInput: React.FC<InputFormProps> = ({
  onInputFormSubmit,
  onTyping,
  onInputFocus,
}) => {
  const [value, setValue] = useState("");
  const [files, setFiles] = useState<ChatFile[]>([]);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  const onChangeText = (value: string) => {
    setValue(value);
    onTyping();
  };

  const onSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (value.trim()) {
      onInputFormSubmit(value, files);
      setValue("");
      setFiles([]);
    }
  };

  const onEnterPress = (e: any) => {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  const onFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      const file = event.target.files[0];
      const base64 = await getBase64(file);
      if (base64) {
        setFiles([
          ...files,
          { content: base64.toString(), type: file.type, name: file.name },
        ]);
      }
    }
  };

  return (
    <form
      ref={formRef}
      className={styles.container}
      onFocus={onInputFocus}
      onSubmit={onSubmit}
    >
      <textarea
        placeholder="Введите сообщение"
        rows={1}
        onKeyDown={onEnterPress}
        className={styles.textArea}
        ref={textareaRef}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
      />
      <input type="file" name="file" onChange={onFile} multiple />
      <button type="submit" className={styles.button}>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.68533 7.1962L6.50805 8.39034C6.56709 8.4055 6.62105 8.43631 6.66424 8.47949C6.70742 8.52268 6.73823 8.57664 6.75339 8.63568L7.99308 13.5265C8.06376 13.8024 8.22051 14.0492 8.44051 14.2309C8.6605 14.4126 8.93224 14.5197 9.21612 14.5367C9.50001 14.5537 9.78121 14.4796 10.0188 14.3253C10.2563 14.171 10.4378 13.9444 10.5367 13.6787L14.882 1.98669C14.9715 1.74693 14.9898 1.48591 14.9348 1.2349C14.8797 0.983882 14.7535 0.753517 14.5714 0.571394C14.3893 0.389272 14.1589 0.263114 13.9079 0.208033C13.6569 0.152951 13.3959 0.171281 13.1561 0.260826L1.51898 4.64966C1.25235 4.74922 1.02531 4.93186 0.871158 5.17078C0.717009 5.4097 0.643872 5.69233 0.662479 5.97718C0.681087 6.26203 0.790458 6.53412 0.974546 6.75351C1.15863 6.97291 1.40774 7.12806 1.68533 7.1962Z"
            fill="#0667eb"
          />
        </svg>
      </button>
    </form>
  );
};

export default ChatInput;
