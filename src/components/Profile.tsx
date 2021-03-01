import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ContextsChallenges';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src='https://github.com/kellane.png' alt='Kellane Lopes' />
            <div>
                <strong>Kellane Lopes</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>

    );
}