import clsx from "clsx";

const Typography = ({ className, variant = "h2", children }) => {
  const classes = clsx(
    className,
    variant === "h1" ? "text-6xl leading-[4rem] text-white " : "",
    variant === "h2" ? "text-3xl leading-[3rem] font-bold text-white" : "",
    variant === "h3" ? "text-2xl leading-[3rem]  text-white " : "",
    variant === "h4" ? "text-[22px] leading-[3rem]  text-white " : "",
    variant === "p" ? " leading-relaxed font-extralight text-gray" : ""
  );
  return <h2 className={classes}>{children} </h2>;
};

export default Typography;
