import { useCallback, useState } from "react";

/**
 * @param {"email" || "password"} type
 * @returns
 */

const useValidate = (type) => {
    const [validity, setValidity] = useState(false);
    const [warnList, setWarnList] = useState([]);
  
    const oncheckValidity = (text) => {
      const warnList = [];
      if (!text) {
        return setValidity(false);
      }
      const regexforValAuth = {
        password: {
          warnText: "비밀번호는 8글자 이상이어야 합니다.",
          fn: new RegExp("(?=.{8,})"),
        },
        email: {
          warnText: "이메일에는 @가 포함되어야 합니다.",
          fn: new RegExp("@"),
        },
      };
      const { warnText, fn } = regexforValAuth[type];
      if (!fn.test(text)) {
        warnList.push(warnText);
      }
  
      setWarnList(warnList);
      if (warnList.length > 0) {
        setValidity(false);
      } else {
        setValidity(true);
      }
    };

    return [validity, warnList, oncheckValidity];
  };
  
const useSignForm = () => {
    const [emailIsValid, emailWarnList, oncheckEmail] = useValidate("email");
    const [passwordIsValid, passwordWarnList, oncheckPassword] = useValidate("password");

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
      });

    const handleInput = useCallback((key) => (e) => {
        setUserInfo({...userInfo, [key]: e.target.value});
        if (key ==="email"){
            oncheckEmail(e.target.value);
        }
        if (key ==="password"){
            oncheckPassword(e.target.value);
        }
    }, [userInfo]
    );
    return {
        userInfo,
        setUserInfo,
        handleInput,
        emailIsValid,
        emailWarnList,
        passwordIsValid,
        passwordWarnList,
      };
}

export default useSignForm;