// components/ThemeToggle.tsx
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux/slices/themeSlice";
import { RootState } from "@/redux/store";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Toggle Theme ({theme.mode})
    </button>
  );
};

export default ThemeToggle;
