import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/8eb0caf811bc5040fdada1d17442e2e8.jpeg?lk3s=a5d48078&nonce=77893&refresh_token=238ab18a13239ff4190d6f554e9a2c0e&x-expires=1726754400&x-signature=1fTZdfwfGO0tHSNA3eirFAmEU7g%3D&shp=a5d48078&shcp=81f88b70" alt="..." />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;