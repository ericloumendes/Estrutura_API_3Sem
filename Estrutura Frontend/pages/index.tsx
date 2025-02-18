import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Home() {

    const router = useRouter();

    return(
        <div className={styles.container}>
            <h1>Home page</h1>
            <button onClick={() => router.push('/about')}>
                Go to about
            </button>
        </div>
    )
}