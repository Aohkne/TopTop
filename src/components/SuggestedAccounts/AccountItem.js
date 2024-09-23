// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 12]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/8eb0caf811bc5040fdada1d17442e2e8.jpeg?lk3s=a5d48078&nonce=68973&refresh_token=48b0acdcb7b1aa6d42c5d86334ad225f&x-expires=1727247600&x-signature=DFHm9IA1Z2K%2BtATt%2FGuc2WXfnyk%3D&shp=a5d48078&shcp=81f88b70"
                        alt=""
                    />

                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>LeHuuKhoa</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Lê Hữu Khoa</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

// AccountItem.protoTypes = {};
export default AccountItem;
