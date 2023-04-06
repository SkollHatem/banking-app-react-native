import React from "react";
import { render } from "@testing-library/react-native";

import BankCardSkeleton from "./BankCardSkeleton";

describe("BankCardSkeleton", () => {
    const instance = render(<BankCardSkeleton />);

    it("renders BankCardSkeleton component", () => {
        expect(instance).toBeTruthy;
    });
});
