import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
// import { action } from "@storybook/addon-actions";

storiesOf("Components", module)
.addDecorator(withKnobs)
.addDecorator(withInfo)
.add("example", () => (
    <button>test</button>
));