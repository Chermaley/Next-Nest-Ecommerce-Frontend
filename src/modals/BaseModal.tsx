import React, { PropsWithChildren } from 'react'
import Modal from 'react-modal'
import styles from './BaseModal.module.scss'
import ReactModal from 'react-modal'

const BaseModal: React.FC<PropsWithChildren & ReactModal.Props> = ({
  children,
  ...props
}) => {
  return (
    <Modal overlayClassName={styles.overlay} {...props}>
      {children}
    </Modal>
  )
}

export default BaseModal
