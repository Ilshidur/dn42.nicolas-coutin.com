import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/Bird_bg_round.svg" alt="Logo" className={styles.logo} />
        <a href="https://nicolas-coutin.com">https://nicolas-coutin.com</a>
        <a href="https://github.com/Ilshidur">https://github.com/Ilshidur</a>
        <a href="https://as4242421769.ilshidur.dn42">DN42 mirror</a>
      </footer>
    </>
  )
}
