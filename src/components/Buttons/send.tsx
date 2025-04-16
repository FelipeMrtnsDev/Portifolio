const Send = () => {
  return (
    <div>
      <button type="submit" className="btn-5jD8wL">
        <div className="svg-wrapper-2k8VnR">
          <div className="svg-container-9LrZyP">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="icon-M7zQxT"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              />
            </svg>
          </div>
        </div>
        <span className="text-3nL2Rb">Send</span>
      </button>

      <style>{`
        .btn-5jD8wL {
          font-family: inherit;
          font-size: 18px;
          background: #fc5c00;
          color: white;
          padding: 10px;
          padding-left: 0.9em;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 8px;
          // overflow: hidden;
          transition: all 0.2s;
          cursor: pointer;
          width: 100%;
        }

        .text-3nL2Rb {
          display: block;
          margin-left: 0.3em;
          transition: all 0.3s ease-in-out;
        }

        .icon-M7zQxT {
          display: block;
          transform-origin: center center;
          transition: transform 0.3s ease-in-out;
        }

        .btn-5jD8wL:hover .svg-container-9LrZyP {
          animation: fly-1-5Zk8L3 0.6s ease-in-out infinite alternate;
        }

        .btn-5jD8wL:hover .icon-M7zQxT {
          transform: translateX(1.2em) rotate(45deg) scale(1.1);
        }

        .btn-5jD8wL:hover .text-3nL2Rb {
          transform: translateY(-2em);
        }

        .btn-5jD8wL:active {
          transform: scale(0.95);
        }

        @keyframes fly-1-5Zk8L3 {
          from {
            transform: translateY(0.1em);
          }
          to {
            transform: translateY(-0.1em);
          }
        }
      `}</style>
    </div>
  );
};

export default Send;
