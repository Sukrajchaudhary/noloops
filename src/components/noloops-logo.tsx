import Image from "next/image";
interface Props extends React.HTMLAttributes<HTMLImageElement> {
  variant?: "white" | "default";
}

function NoloopsLogo({ variant = "default", ...props }: Props) {
  return (
    <Image
      src={
        variant === "default"
          ? "/assets/images/fulllogog-nobg.png"
          : "/assets/images/Logog-head-nobg.png"
      }
      alt="noloops logo"
      height={200}
      width={150}
      {...props}
    />
  );
}

export default NoloopsLogo;
