const Button = {
  variants: {
    solid: (props) => ({
      paddingBlock: "18px",
      borderRadius: "3xl",
      width: "170px",
      height: "50px",
      color: "white",
      borderWidth: "2px",
      transition: "all 0.5s ease",
      fontFamily: "body",
    }),
    outline: (props) => ({
      borderRadius: "3xl",
      width: "170px",
      height: "50px",
      borderWidth: "2px",
      zIndex: "2",
      paddingBlock: "18px",
      transition: "all .5s ease",
      fontFamily: "heading",
      overflow: "hidden",
      textTransform: "uppercase",
      fontSize: "14px",
      borderColor: "ferrariRed.900",
      _hover: {
        _after: { left: 0 },
        borderColor: "ferrariRed.900",
        backgroundColor: "transparent",
      },
      _after: {
        content: `""`,
        width: "150%",
        position: "absolute",
        height: "100%",
        zIndex: "-1",
        top: "0",
        left: "calc(-150% - 52px)",
        borderBottom: "52px solid #ff2600",
        borderRight: "52px solid transparent",
        transition: ".4s ease-in-out all",
      },
    }),
  },
};

export default Button;
