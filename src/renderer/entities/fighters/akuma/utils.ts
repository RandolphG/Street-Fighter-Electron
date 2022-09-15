import { fighterState } from "../utils";

const akumaFrames = new Map([
  /* Idle*/
  [
    "idle-01",
    [
      [1, 8, 73, 109],
      [35, 97]
    ]
  ],
  [
    "idle-02",
    [
      [74, 8, 73, 109],
      [35, 97]
    ]
  ],
  [
    "idle-03",
    [
      [144, 8, 73, 109],
      [35, 97]
    ]
  ],
  [
    "idle-04",
    [
      [215, 8, 73, 109],
      [35, 97]
    ]
  ],

  /* Move Forward */
  [
    "forward-01",
    [
      [5, 115, 68, 99],
      [35, 97]
    ]
  ],
  [
    "forward-02",
    [
      [75, 115, 70, 99],
      [35, 97]
    ]
  ],
  [
    "forward-03",
    [
      [145, 115, 70, 99],
      [35, 97]
    ]
  ],
  [
    "forward-04",
    [
      [219, 115, 68, 99],
      [35, 97]
    ]
  ],
  [
    "forward-05",
    [
      [288, 115, 69, 99],
      [35, 97]
    ]
  ],
  [
    "forward-06",
    [
      [359, 115, 68, 99],
      [35, 97]
    ]
  ],
  /* Move Backward */
  [
    "backwards-01",
    [
      [432, 115, 70, 99],
      [35, 97]
    ]
  ],
  [
    "backwards-02",
    [
      [504, 115, 70, 99],
      [35, 97]
    ]
  ],
  [
    "backwards-03",
    [
      [576, 115, 72, 99],
      [35, 97]
    ]
  ],
  [
    "backwards-04",
    [
      [650, 115, 68, 99],
      [35, 97]
    ]
  ],
  [
    "backwards-05",
    [
      [724, 115, 72, 99],
      [35, 97]
    ]
  ],
  [
    "backwards-06",
    [
      [798, 115, 70, 99],
      [35, 97]
    ]
  ],
  /* Jump Up */
  [
    "jump-01",
    [
      [5, 262, 68, 109],
      [35, 97]
    ]
  ],
  [
    "jump-02",
    [
      [75, 262, 59, 109],
      [35, 97]
    ]
  ],
  [
    "jump-03",
    [
      [136, 262, 59, 109],
      [35, 97]
    ]
  ],
  [
    "jump-04",
    [
      [189, 262, 59, 109],
      [35, 97]
    ]
  ],
  [
    "jump-05",
    [
      [246, 263, 59, 107],
      [35, 97]
    ]
  ],
  [
    "jump-06",
    [
      [297, 262, 59, 107],
      [35, 97]
    ]
  ],
  [
    "jump-07",
    [
      [348, 262, 57, 107],
      [35, 97]
    ]
  ],
  [
    "jump-08",
    [
      [348, 262, 57, 107],
      [35, 97]
    ]
  ],
  /* Jump Forwards */
  [
    "jump-forwards-01",
    [
      [480, 281, 68, 109],
      [35, 97]
    ]
  ],
  [
    "jump-forwards-02",
    [
      [550, 251, 56, 109],
      [35, 97]
    ]
  ],
  [
    "jump-forwards-03",
    [
      [136, 262, 59, 109],
      [35, 97]
    ]
  ],
  [
    "jump-forwards-04",
    [
      [189, 262, 59, 109],
      [35, 97]
    ]
  ],
  [
    "jump-forwards-05",
    [
      [246, 263, 59, 107],
      [35, 97]
    ]
  ],
  [
    "jump-forwards-06",
    [
      [297, 262, 59, 107],
      [35, 97]
    ]
  ],
  [
    "jump-forwards-07",
    [
      [348, 262, 57, 107],
      [35, 97]
    ]
  ],
  [
    "jump-forwards-08",
    [
      [348, 262, 57, 107],
      [35, 97]
    ]
  ],
  /* Jump Backwards */
  [
    "jump-backwards-01",
    [
      [5, 262, 68, 109],
      [35, 97]
    ]
  ],
  [
    "jump-backwards-02",
    [
      [75, 262, 59, 109],
      [35, 97]
    ]
  ],
  [
    "jump-backwards-03",
    [
      [136, 262, 59, 109],
      [35, 97]
    ]
  ],
  [
    "jump-backwards-04",
    [
      [189, 262, 59, 109],
      [35, 97]
    ]
  ],
  [
    "jump-backwards-05",
    [
      [246, 263, 59, 107],
      [35, 97]
    ]
  ],
  [
    "jump-backwards-06",
    [
      [297, 262, 59, 107],
      [35, 97]
    ]
  ],
  [
    "jump-backwards-07",
    [
      [348, 262, 57, 107],
      [35, 97]
    ]
  ],
  [
    "jump-backwards-08",
    [
      [348, 262, 57, 107],
      [35, 97]
    ]
  ]
]);

const akumaAnimationDelay :any = {
  [fighterState.IDLE]: [
    ["idle-01", 68],
    ["idle-02", 68],
    ["idle-03", 68],
    ["idle-04", 68],
    ["idle-03", 68],
    ["idle-02", 68]
  ],
  [fighterState.WALK_FORWARD]: [
    ["forward-01", 65],
    ["forward-02", 65],
    ["forward-03", 65],
    ["forward-04", 65],
    ["forward-05", 65],
    ["forward-06", 65]
  ],
  [fighterState.WALK_BACKWARD]: [
    ["backwards-01", 65],
    ["backwards-02", 65],
    ["backwards-03", 65],
    ["backwards-04", 65],
    ["backwards-05", 65],
    ["backwards-06", 65]
  ],
  [fighterState.JUMP_UP]: [
    ["jump-01", 180],
    ["jump-02", 100],
    ["jump-03", 100],
    ["jump-04", 100],
    ["jump-05", 100],
    ["jump-06", 100],
    ["jump-07", 65],
    ["jump-08", -1]
  ],
  [fighterState.JUMP_FORWARD]: [
    ["jump-forwards-01", 180],
    ["jump-forwards-02", 100],
    ["jump-forwards-03", 100],
    ["jump-forwards-04", 100],
    ["jump-forwards-05", 100],
    ["jump-forwards-06", 100],
    ["jump-forwards-07", 65],
    ["jump-forwards-08", -1]
  ],
  [fighterState.JUMP_BACKWARD]: [
    ["jump-backwards-01", 180],
    ["jump-backwards-02", 100],
    ["jump-backwards-03", 100],
    ["jump-backwards-04", 100],
    ["jump-backwards-05", 100],
    ["jump-backwards-06", 100],
    ["jump-backwards-07", 65],
    ["jump-backwards-08", -1]
  ]
};

export { akumaFrames, akumaAnimationDelay };
