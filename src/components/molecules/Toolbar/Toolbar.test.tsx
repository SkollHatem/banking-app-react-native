import React from "react";
import { render, screen } from "@testing-library/react-native";

import Toolbar from "./Toolbar";

describe("Toolbar", () => {
    const instance = render(<Toolbar />);

    it("renders Toolbar component", () => {
        expect(instance).toBeTruthy;
    });
});
