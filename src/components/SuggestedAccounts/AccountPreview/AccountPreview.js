import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/8eb0caf811bc5040fdada1d17442e2e8.jpeg?lk3s=a5d48078&nonce=68973&refresh_token=48b0acdcb7b1aa6d42c5d86334ad225f&x-expires=1727247600&x-signature=DFHm9IA1Z2K%2BtATt%2FGuc2WXfnyk%3D&shp=a5d48078&shcp=81f88b70"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>LeHuuKhoa</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>

                <p className={cx('name')}>Lê Hữu Khoa</p>

                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
