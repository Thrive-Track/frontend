import { motion } from "framer-motion";
import "./ProgressBar.css";
function ProgressBar(value) {
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setProgress(Math.random() * 100);
  //   }, 3000);
  //   return () => {
  //     clearInterval(id);
  //   };
  // }, []);
  // const progessTextRef = useRef(null);
  // useEffect(() => {
  //   const progressText = progessTextRef.current?.textContent;
  //   if (progressText != null) {
  //     animate(parseInt(progressText), value, {
  //       duration: 2,
  //       onUpdate: (cv) => {
  //         progessTextRef.current.textContent = cv.toFixed(0);
  //       },
  //     });
  //   }
  // }, [value]);
  return (
    <div className="progressbar_container">
      <div className="progressbar">
        <motion.div
          className="bar"
          animate={{
            width: `${value}%`,
          }}
          transition={{ duration: 2 }}
        />
      </div>
      <div className="progressbar_text">
        <p>0</p>
        <p>%</p>
      </div>
    </div>
  );
}
export default ProgressBar;
