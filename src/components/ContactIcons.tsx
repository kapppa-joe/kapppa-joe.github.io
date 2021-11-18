import Icon from "./Icon";
import EmailIconWrapper from "./EmailIconWrapper";

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
