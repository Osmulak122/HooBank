import { feedback } from "../constants"
import styles from "../style"
import FeedbackCard from "./FeedbackCard"

const Testimonials = () => (

  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

    <div />

    <div className="w-full flex md:flex-row flex-col items-center justify-between sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>What people are <br className="sm:block hidden"/> saying about us</h2>
    </div>
  </section>
  )


export default Testimonials