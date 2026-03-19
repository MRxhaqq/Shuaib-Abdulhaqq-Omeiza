import logoSrc from "/favicon.svg";

function Logo({ size = 36, className = "" }) {
  return (
    <img
      src={logoSrc}
      alt="Shuaib Abdulhaqq logo"
      width={size}
      height={size}
      className={className}
      style={{ display: "block", borderRadius: "8px" }}
    />
  );
}

export default Logo;
