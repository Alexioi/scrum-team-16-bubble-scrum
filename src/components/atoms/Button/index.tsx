import Link from "next/link";

import style from "./style.module.scss";

const Button = ({
  link,
  size,
  text,
  type,
  theme,
}: {
  link?: string;
  size?: "low";
  text: string;
  type?: "submit" | "reset" | "button";
  theme: "outline";
}) => {
  if (link !== undefined) {
    <Link href="/blog/hello-world">{text}</Link>;
  }

  return (
    <button className={`${style.button}`} type={type}>
      {text}
    </button>
  );
};

export { Button };
