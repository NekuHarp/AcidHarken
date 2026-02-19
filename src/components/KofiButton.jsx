import { forwardRef } from "react";

const KofiButton = forwardRef(() => (
    <a href="https://ko-fi.com/A0A8JUCQG" target="_blank">
        <img
            height="36"
            style={{ border: "0px", height: "36px" }}
            src="https://storage.ko-fi.com/cdn/kofi4.png?v=6"
            border="0"
            alt="Buy Me a Coffee at ko-fi.com"
        />
    </a>
));

export default KofiButton;
