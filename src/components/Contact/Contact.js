import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <Title title="contact" subtitle="us" />
            <div className={styles.center}>
                <form
                    className={styles.form}
                    action="https://formspree.io/jdozierezell@gmail.com"
                    method="POST"
                >
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className={styles.formControl}
                            placeholder="Jonathan Dozier-Ezell"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={styles.formControl}
                            placeholder="email@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            className={styles.formControl}
                            placeholder="hello there"
                            cols="30"
                            rows="10"
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value={'Submit Here'}
                            className={styles.submit}
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
