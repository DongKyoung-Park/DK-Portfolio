import Link from 'next/link';
import { saveAs } from 'file-saver';

import { GoMarkGithub } from 'react-icons/go';
import { BiRocket } from 'react-icons/bi';
import { FaRegFilePdf } from 'react-icons/fa';

import styles from '../styles/App.module.scss';

const SocialMedia = () => (
  <div className={styles.app__social}>
    <div>
      <Link href='https://www.wanted.co.kr/cv/CAEEAAQBAE0CBQAFBQJNQw=='>
        <a target='_blank' rel='noreferrer'>
          <BiRocket />
        </a>
      </Link>
    </div>
    <div onClick={() => saveAs('/Images/박동경_웹개발자_이력서.pdf', '박동경_웹개발자_이력서.pdf')}>
      <FaRegFilePdf />
    </div>
    <div>
      <Link href='https://github.com/DongKyoungPark'>
        <a target='_blank' rel='noreferrer'>
          <GoMarkGithub />
        </a>
      </Link>
    </div>
  </div>
);

export default SocialMedia;
