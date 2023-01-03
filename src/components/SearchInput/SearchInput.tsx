import React, { useState } from 'react'
import styles from './SearchInput.module.scss'
import Link from 'next/link'
import { trpc } from '../../utils/trpc'

type SearchInputPropsTypes = {
  onCloseRequested: () => void
}

const SearchInput: React.FC<SearchInputPropsTypes> = ({ onCloseRequested }) => {
  const [term, setTerm] = useState('')

  const { data } = trpc.products.getProductsByTerm.useQuery({ term }, {})

  return (
    <div className={styles.overlay} onClick={onCloseRequested}>
      <div onClick={(e) => e.stopPropagation()} className={styles.content}>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          placeholder="Введите название товара"
          className={styles.input}
        />
        <div className={styles.results}>
          {data?.map((item) => (
            <div key={item.id} onClick={onCloseRequested}>
              <Link href={`/catalog/${item.id}`} key={item.id}>
                <div className={styles.result}>{item.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.cross} onClick={onCloseRequested}>
        &#x2716;
      </div>
    </div>
  )
}

export default SearchInput
