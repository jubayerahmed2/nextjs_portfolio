import clsx from "clsx";

const Typography = ({ className, variant = "h2", children }) => {
  const classes = clsx(
    className,
    variant === "h1" ? "text-6xl leading-[4rem] text-white" : "",
    variant === "h2" ? "text-3xl leading-[3rem] font-bold text-white" : "",
    variant === "h3" ? "text-2xl leading-[3rem] font-semibold text-white" : "",
    variant === "p" ? "text-base text-gray font-normal" : ""
  );
  return <h2 className={classes}>{children} </h2>;
};

export default Typography;
