import { useEffect, useState } from "preact/hooks";
import Icon from "./Icon";
import Tooltip from "./Tooltip";

type iconDataType = {
  slug: string;
  url?: string;
  email?: string;
};

const iconData: iconDataType[] = [
  {
    slug: "github",
    url: "https://github.com/kapppa-joe/",
  },
  { slug: "email", email: "kapppa.joe@gmail.com" },
  { slug: "linkedin", url: "https://www.linkedin.com/in/joeccf/" },
  { slug: "twitter", url: "https://twitter.com/kapppa_joe" },
];

const IconLinkWrapper = ({ url = "", email = "", children }) => {
  if (url) {
    return (
      <a href={url} target="_blank">
        {children}
      </a>
    );
  } else if (email) {
    return <EmailIconWrapper email={email}>{children}</EmailIconWrapper>;
  } else {
    return <>{children}</>;
  }
};

const EmailIconWrapper = ({ email = "", children }) => {
  const initMsg = "click to copy the email address";
  const doneCopyMsg = "copyed! :)";
  const [isActive, setIsActive] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  const handleClick = (e: Event) => {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      setHasCopied(true);
      setIsActive(true);
    });
  };

  useEffect(() => {});

  useEffect(() => {
    if (hasCopied) {
      setTimeout(() => {
        setHasCopied(false);
        setIsActive(false);
      }, 1000);
    }
  }, [hasCopied]);

  return (
    <>
      <a
        href={`mailto:${email}`}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        onClick={handleClick}
      >
        <Tooltip isActive={isActive} str={hasCopied ? doneCopyMsg : initMsg} />
        {children}
      </a>
    </>
  );
};

const ContactIcons = () => {
  return (
    <div className="contact-icons">
      {iconData.map((icon) => (
        <IconLinkWrapper {...icon}>
          <Icon slug={icon.slug} />
        </IconLinkWrapper>
      ))}
    </div>
  );
};

export default ContactIcons;
