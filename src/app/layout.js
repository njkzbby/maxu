import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({subsets: ['latin']})
import styles from './home.module.css'

export const metadata = {
    title: 'Обточка рабочего колеса',
    description: 'Coded by Maxim',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className={styles.layout}>{children}</div>
        </body>
        </html>
    )
}
