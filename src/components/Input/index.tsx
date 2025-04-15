type Props = {
  placeholder?: string
}

const CustomInput = ({ placeholder }: Props) => {
  return (
    <div>
      <div className="textInputWrapper bg-white text-black placeholder:text-black textInput bg-[#252525] text-white group-focus-within:bg-white focus:bg-white active:bg-white transition-colors duration-200">
        <input placeholder={placeholder} type="text" className="textInput" />
      </div>

      <style>{`
        .textInputWrapper {
          position: relative;
          --accent-color: #ff7301;
        }

        .textInputWrapper:before,
        .textInputWrapper:after {
          content: "";
          left: 0;
          right: 0;
          position: absolute;
          pointer-events: none;
          bottom: -1px;
          z-index: 4;
          width: 100%;
        }

        .textInputWrapper:before {
          transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid rgba(0, 0, 0, 0.42);
        }

        .textInputWrapper:focus-within:before {
          border-bottom: 1px solid var(--accent-color);
        }

        .textInputWrapper:after {
          transform: scaleX(0);
          transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
          will-change: transform;
          border-bottom: 2px solid var(--accent-color);
        }

        .textInputWrapper:focus-within:after {
          transform: scaleX(1);
        }

        .textInput::placeholder {
          transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1);
          opacity: 1;
          user-select: none;
          color: rgba(255, 255, 255, 0.582);
        }

        .textInputWrapper .textInput {
          border-radius: 5px 5px 0px 0px;
          box-shadow: 0px 2px 5px rgb(35 35 35 / 30%);
          max-height: 36px;
          transition: background-color 200ms cubic-bezier(0.25, 0.8, 0.25, 1);
          font-size: 14px;
          font-weight: 500;
          padding: 12px;
          width: 100%;
          border-left: none;
          border-bottom: none;
          border-right: none;
        }

        .textInputWrapper .textInput:focus,
        .textInputWrapper .textInput:active {
          outline: none;
        }

        .textInputWrapper:focus-within .textInput::placeholder {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default CustomInput;
