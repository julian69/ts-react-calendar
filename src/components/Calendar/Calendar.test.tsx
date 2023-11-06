import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Calendar from "./Calendar";

describe('Calendar', () => {
  it('should render the calendar', () => {
    const { getByTestId } = render(<Calendar />)
    expect(getByTestId('calendar one')).toBeInTheDocument()
  });
});