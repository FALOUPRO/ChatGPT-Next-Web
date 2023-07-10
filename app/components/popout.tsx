import Locale from "../locales";
import Image from "next/image";
import QQIcon from "../icons/qq.svg";

export function Popout() {
  return (
    <p>
      防止失联或有任何问题请加QQ群 <QQIcon />
      <a
        target="_blank"
        href="https://qm.qq.com/cgi-bin/qm/qr?k=ENlb-Biw5X-6z1GS4V2A3tARC8qUS5g_&jump_from=webapi&authKey=bu/FbIO3qs5oPD0smrr+ElPLORMm/4Ev9YrVOK6z1+LJmvuk37AL5729DhaHtlz5"
      >
        741071422
      </a>
    </p>
  );
}
