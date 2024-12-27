const BOARD = [{
    "_id": {
      "$oid": "66bae4b4ad91f405503c9a41"
    },
    "tasks": {
      "task-1": {
        "id": "task-1",
        "content": "task 1 content",
        "_id": {
          "$oid": "66bae4b4ad91f405503c9a42"
        },
        "todos": [],
        "comments": [],
        "createdBy": "66badac8c97888943971763f"
      },
      "task-2": {
        "id": "task-2",
        "content": "task 2 content",
        "_id": {
          "$oid": "66bae4b4ad91f405503c9a43"
        },
        "todos": [],
        "comments": [],
        "createdBy": "66badac8c97888943971763f"
      },
      "task-3": {
        "id": "task-3",
        "content": "task 3 content",
        "_id": {
          "$oid": "66bae4b4ad91f405503c9a44"
        },
        "todos": [],
        "comments": [],
        "createdBy": "66badac8c97888943971763f"
      }
    },
    "columns": {
      "column-1": {
        "id": "column-1",
        "title": "To Do",
        "taskIds": [
          "task-1",
          "task-2",
          "task-3"
        ],
        "_id": {
          "$oid": "66bae4b4ad91f405503c9a45"
        }
      },
      "column-2": {
        "id": "column-2",
        "title": "In Progress",
        "taskIds": [],
        "_id": {
          "$oid": "66bae4b4ad91f405503c9a46"
        }
      }
    },
    "columnOrder": [
      "column-1",
      "column-2"
    ],
    "members": [],
    "creator": "creator_id_1",
    "orgId": "66beb38e168efaf09cb836bd",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66c000d42cb62cd293650e2d"
    },
    "name": "Board next",
    "tasks": {
      "task-1": {
        "id": "task-1",
        "content": "task 1 content",
        "_id": {
          "$oid": "66c000d42cb62cd293650e2e"
        },
        "todos": [],
        "comments": []
      },
      "task-2": {
        "id": "task-2",
        "content": "task 2 content",
        "_id": {
          "$oid": "66c000d42cb62cd293650e2f"
        },
        "todos": [],
        "comments": []
      },
      "task-3": {
        "id": "task-3",
        "content": "task 3 content",
        "_id": {
          "$oid": "66c000d42cb62cd293650e30"
        },
        "todos": [],
        "comments": []
      }
    },
    "columns": {
      "column-1": {
        "id": "column-1",
        "title": "To Do",
        "taskIds": [
          "task-1",
          "task-2",
          "task-3"
        ],
        "_id": {
          "$oid": "66c000d42cb62cd293650e31"
        }
      },
      "column-2": {
        "id": "column-2",
        "title": "In Progress",
        "taskIds": [],
        "_id": {
          "$oid": "66c000d42cb62cd293650e32"
        }
      }
    },
    "columnOrder": [
      "column-1",
      "column-2"
    ],
    "members": [],
    "creator": "creator_id_1",
    "orgId": "66beb38e168efaf09cb836bd",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66c0238dddbf67fa4ef150f3"
    },
    "name": "The Lions project",
    "tasks": {
      "5324f41d-57ea-4bd8-bbec-6416cf0b4649": {
        "id": "5324f41d-57ea-4bd8-bbec-6416cf0b4649",
        "content": "Create ECP standards for customer onboarding ",
        "title": "Create ECP customer documentation ",
        "sprintId": "sprint_1",
        "columnId": "6d568af8-4adf-43f4-b5fb-c1357beaa190",
        "assignedTo": "66bfce1376fa92717662d42e",
        "workType": "66beb3df47b90484da222a18",
        "todos": [],
        "_id": {
          "$oid": "676d040928e3820923e01185"
        },
        "comments": []
      },
      "953a0a56-f618-49b3-845a-c373ebaa0b19": {
        "id": "953a0a56-f618-49b3-845a-c373ebaa0b19",
        "content": "Please create view finder for the recent implementation ",
        "title": "Create view finder modal ",
        "sprintId": "sprint_1",
        "columnId": "6d568af8-4adf-43f4-b5fb-c1357beaa190",
        "assignedTo": "66bfce1376fa92717662d42e",
        "workType": "66bec4c82388a254a93bc2c9",
        "todos": [],
        "_id": {
          "$oid": "676d079428e3820923e011c9"
        },
        "comments": []
      }
    },
    "columns": {
      "49d3daf1-0e5d-42be-8d80-f27f0b1b9478": {
        "id": "49d3daf1-0e5d-42be-8d80-f27f0b1b9478",
        "title": "To Do ",
        "taskIds": [],
        "_id": {
          "$oid": "66c0238dddbf67fa4ef150f4"
        }
      },
      "6d568af8-4adf-43f4-b5fb-c1357beaa190": {
        "id": "6d568af8-4adf-43f4-b5fb-c1357beaa190",
        "title": "In Design",
        "taskIds": [
          "953a0a56-f618-49b3-845a-c373ebaa0b19",
          "5324f41d-57ea-4bd8-bbec-6416cf0b4649"
        ],
        "_id": {
          "$oid": "66c0238dddbf67fa4ef150f5"
        }
      },
      "cbabcad2-b3d4-4cee-bbf5-6b89a693b6bc": {
        "id": "cbabcad2-b3d4-4cee-bbf5-6b89a693b6bc",
        "title": "In Progress",
        "taskIds": [],
        "_id": {
          "$oid": "66c0238dddbf67fa4ef150f6"
        }
      },
      "9021c073-d658-4e7d-99d5-aba6d1f2532b": {
        "id": "9021c073-d658-4e7d-99d5-aba6d1f2532b",
        "title": "In Testing",
        "taskIds": [],
        "_id": {
          "$oid": "66c0238dddbf67fa4ef150f7"
        }
      },
      "55359046-7e1b-487c-a719-aa8af780dcb5": {
        "id": "55359046-7e1b-487c-a719-aa8af780dcb5",
        "title": "Done",
        "taskIds": [],
        "_id": {
          "$oid": "66c0238dddbf67fa4ef150f8"
        }
      }
    },
    "columnOrder": [
      "49d3daf1-0e5d-42be-8d80-f27f0b1b9478",
      "6d568af8-4adf-43f4-b5fb-c1357beaa190",
      "cbabcad2-b3d4-4cee-bbf5-6b89a693b6bc",
      "9021c073-d658-4e7d-99d5-aba6d1f2532b",
      "55359046-7e1b-487c-a719-aa8af780dcb5"
    ],
    "orgId": "66beb38e168efaf09cb836bd",
    "__v": 23,
    "members": [
      "66bfce1376fa92717662d42e",
      "66bfd2b776fa92717662d44c"
    ]
  },
  {
    "_id": {
      "$oid": "66c1864848ce325b5616b648"
    },
    "name": "The Lion's project 4",
    "tasks": {
      "be937942-45fd-483a-a69f-fa66a54dc489": {
        "id": "be937942-45fd-483a-a69f-fa66a54dc489",
        "content": "Des",
        "title": "Create primary Task ",
        "sprintId": "sprint_1",
        "columnId": "a4392ac2-af66-4ba3-99d8-a24758fee640",
        "assignedTo": "66bfce1376fa92717662d42e",
        "workType": "66beb3df47b90484da222a18",
        "todos": [],
        "_id": {
          "$oid": "66c38ec6fa9837a4ebf06a32"
        },
        "comments": [],
        "createdBy": "66badac8c97888943971763f"
      },
      "4e1f8e90-9ce4-4ee9-8e1a-789a1449f6e4": {
        "id": "4e1f8e90-9ce4-4ee9-8e1a-789a1449f6e4",
        "content": "L1 features includes the following \n- feature 1\n- feature 2\n- feature 3",
        "title": "Create L1 Feature ",
        "sprintId": "sprint_1",
        "columnId": "3c5e37fb-63be-4fbe-8dad-b28189edd91c",
        "assignedTo": "66bfce1376fa92717662d42e",
        "workType": "66beb3df47b90484da222a18",
        "todos": [],
        "_id": {
          "$oid": "66c38f76fa9837a4ebf06a3c"
        },
        "comments": [],
        "createdBy": "66badac8c97888943971763f"
      },
      "43532ea4-293e-4163-9a67-4e4489753606": {
        "id": "43532ea4-293e-4163-9a67-4e4489753606",
        "content": "Check below ops \n1. Sign 1\n2. Sign 2",
        "title": "Check vital ops signals",
        "sprintId": "sprint_1",
        "columnId": "a4392ac2-af66-4ba3-99d8-a24758fee640",
        "assignedTo": "66bfce1376fa92717662d42e",
        "workType": "66bec4c82388a254a93bc2c9",
        "todos": [],
        "_id": {
          "$oid": "66c3bd76fa9837a4ebf06aa2"
        },
        "comments": [],
        "createdBy": "66badac8c97888943971763f"
      },
      "7eba2e38-2343-46f4-8405-c6adebee97a0": {
        "id": "7eba2e38-2343-46f4-8405-c6adebee97a0",
        "content": "Server 1, 3 and 9 must be masked. ",
        "title": "Mask virtual servers ",
        "sprintId": "sprint_1",
        "columnId": "3c5e37fb-63be-4fbe-8dad-b28189edd91c",
        "assignedTo": "66bfce1376fa92717662d42e",
        "workType": "66beb3df47b90484da222a18",
        "todos": [],
        "_id": {
          "$oid": "66cc5da609902cf4f05bb081"
        },
        "comments": [],
        "createdBy": "66badac8c97888943971763f"
      },
      "7edd71d8-48b5-4bf6-b6f7-c047787392b5": {
        "id": "7edd71d8-48b5-4bf6-b6f7-c047787392b5",
        "content": "Create the member ui in secondary navigation. \nhttps://dribbble.com/shots/21227113-Managemate-Task-Management-Dashboard",
        "title": "Create Member UI in secondary navigation",
        "sprintId": "sprint_1",
        "columnId": "a4392ac2-af66-4ba3-99d8-a24758fee640",
        "assignedTo": "66bfd2b776fa92717662d44c",
        "workType": "66bec4c82388a254a93bc2c9",
        "todos": [],
        "_id": {
          "$oid": "66d04553bcfd632f3d222356"
        },
        "comments": [],
        "createdBy": "66badac8c97888943971763f"
      },
      "81cfac6a-8e3f-418e-aca4-fd26a2858f49": {
        "id": "81cfac6a-8e3f-418e-aca4-fd26a2858f49",
        "content": "Test this epic for all sort of \nissues and features ",
        "title": "Test EPIC 01",
        "sprintId": "sprint_1",
        "columnId": "dd417a37-2cde-4635-8731-9a4524db2fe3",
        "assignedTo": "66bfd2b776fa92717662d44c",
        "workType": "66beb3df47b90484da222a18",
        "todos": [],
        "_id": {
          "$oid": "66d04b6abcfd632f3d2223ed"
        },
        "comments": [],
        "createdBy": "66badac8c97888943971763f"
      },
      "3d87bad8-9eca-41c7-a671-cc965296ba94": {
        "id": "3d87bad8-9eca-41c7-a671-cc965296ba94",
        "content": "Check vitels in various domains and parameters ",
        "title": "CHeck web vitels ",
        "sprintId": "sprint_1",
        "columnId": "3c5e37fb-63be-4fbe-8dad-b28189edd91c",
        "assignedTo": "66bfce1376fa92717662d42e",
        "workType": "66beb3df47b90484da222a18",
        "todos": [],
        "_id": {
          "$oid": "676e6e04aff749af2c2a6c0f"
        },
        "comments": []
      },
      "8bb751ee-2878-40a9-b274-fd2ffbb36c6c": {
        "id": "8bb751ee-2878-40a9-b274-fd2ffbb36c6c",
        "content": "Please do proper qa and communicate to fix this. ",
        "title": "BUG - Feature xyz not working ",
        "sprintId": "sprint_1",
        "columnId": "3c5e37fb-63be-4fbe-8dad-b28189edd91c",
        "assignedTo": "66bfd2b776fa92717662d44c",
        "workType": "66beb3df47b90484da222a18",
        "todos": [
          {
            "id": "45ea99dc-4ddd-4791-a6c5-f5793088f4ef",
            "text": "Do methodical QA",
            "completed": false,
            "_id": {
              "$oid": "676e6eabaff749af2c2a6c1a"
            }
          },
          {
            "id": "c250f5d3-2334-4b6c-8f8b-9f453bfd6aa0",
            "text": "Provide daily update",
            "completed": false,
            "_id": {
              "$oid": "676e6eabaff749af2c2a6c1b"
            }
          }
        ],
        "_id": {
          "$oid": "676e6eabaff749af2c2a6c19"
        },
        "comments": []
      }
    },
    "columns": {
      "a4392ac2-af66-4ba3-99d8-a24758fee640": {
        "id": "a4392ac2-af66-4ba3-99d8-a24758fee640",
        "title": "stage 1",
        "taskIds": [
          "7edd71d8-48b5-4bf6-b6f7-c047787392b5",
          "43532ea4-293e-4163-9a67-4e4489753606",
          "be937942-45fd-483a-a69f-fa66a54dc489"
        ],
        "_id": {
          "$oid": "66c1864848ce325b5616b649"
        }
      },
      "3c5e37fb-63be-4fbe-8dad-b28189edd91c": {
        "id": "3c5e37fb-63be-4fbe-8dad-b28189edd91c",
        "title": "Stage 2",
        "taskIds": [
          "8bb751ee-2878-40a9-b274-fd2ffbb36c6c",
          "3d87bad8-9eca-41c7-a671-cc965296ba94",
          "7eba2e38-2343-46f4-8405-c6adebee97a0",
          "4e1f8e90-9ce4-4ee9-8e1a-789a1449f6e4"
        ],
        "_id": {
          "$oid": "66c1864848ce325b5616b64a"
        }
      },
      "dd417a37-2cde-4635-8731-9a4524db2fe3": {
        "id": "dd417a37-2cde-4635-8731-9a4524db2fe3",
        "title": "Stage 3",
        "taskIds": [
          "81cfac6a-8e3f-418e-aca4-fd26a2858f49"
        ],
        "_id": {
          "$oid": "66c1864848ce325b5616b64b"
        }
      },
      "4c2e15b9-62a6-4766-8495-e947832d6b87": {
        "id": "4c2e15b9-62a6-4766-8495-e947832d6b87",
        "title": "Stage Done",
        "taskIds": [],
        "_id": {
          "$oid": "66c1864848ce325b5616b64c"
        }
      }
    },
    "columnOrder": [
      "a4392ac2-af66-4ba3-99d8-a24758fee640",
      "3c5e37fb-63be-4fbe-8dad-b28189edd91c",
      "dd417a37-2cde-4635-8731-9a4524db2fe3",
      "4c2e15b9-62a6-4766-8495-e947832d6b87"
    ],
    "members": [
      "66bfce1376fa92717662d42e",
      "66bfd2b776fa92717662d44c",
      "66c828dfecaafab5226907e1"
    ],
    "orgId": "66beb38e168efaf09cb836bd",
    "__v": 12
  }]

const COMMENTS = [{
    "_id": {
      "$oid": "66cb2007be0ad9d1764813c8"
    },
    "commenterId": "66bfce1376fa92717662d42e",
    "comment": "Lets see if the next comment is added ... :D ",
    "taskId": "be937942-45fd-483a-a69f-fa66a54dc489",
    "reactions": [
      {
        "reactedBy": "66badac8c97888943971763f",
        "reaction": "THUMBS_UP",
        "_id": {
          "$oid": "66d03ee2bcfd632f3d2220d0"
        }
      }
    ],
    "replies": [],
    "createdAt": {
      "$date": "2024-08-25T12:13:59.906Z"
    },
    "__v": 1
  },
  {
    "_id": {
      "$oid": "66cc3ae0be0ad9d17648144a"
    },
    "commenterId": "66badac8c97888943971763f",
    "comment": "This is first comment on this task. ",
    "taskId": "43532ea4-293e-4163-9a67-4e4489753606",
    "reactions": [
      {
        "reactedBy": "66badac8c97888943971763f",
        "reaction": "CLAPS",
        "_id": {
          "$oid": "66d03bd3bcfd632f3d2216d3"
        }
      },
      {
        "reactedBy": "66badac8c97888943971763f",
        "reaction": "THUMBS_DOWN",
        "_id": {
          "$oid": "66d03c78bcfd632f3d221791"
        }
      },
      {
        "reactedBy": "66badac8c97888943971763f",
        "reaction": "SMILE",
        "_id": {
          "$oid": "66d03c7fbcfd632f3d221802"
        }
      },
      {
        "reactedBy": "66badac8c97888943971763f",
        "reaction": "THANKS",
        "_id": {
          "$oid": "66d03cc5bcfd632f3d22192c"
        }
      },
      {
        "reactedBy": "66bfce1376fa92717662d42e",
        "reaction": "THANKS",
        "_id": {
          "$oid": "66d03d0bbcfd632f3d2219b9"
        }
      }
    ],
    "replies": [
      {
        "reply": "This is a precise reply",
        "replierId": "66bfce1376fa92717662d42e",
        "reactions": [],
        "_id": {
          "$oid": "66cce32c4399b7627954b6e7"
        }
      },
      {
        "reply": "This is a precise reply",
        "replierId": "66bfce1376fa92717662d42e",
        "reactions": [],
        "_id": {
          "$oid": "66cce4865cb02e3f697dab69"
        }
      },
      {
        "reply": "Will check this ",
        "replierId": "66badac8c97888943971763f",
        "reactions": [],
        "_id": {
          "$oid": "66cce5c15cb02e3f697dab8c"
        }
      },
      {
        "reply": "Got it :) ",
        "replierId": "66badac8c97888943971763f",
        "reactions": [],
        "_id": {
          "$oid": "66cce650c62b37d98ceca6b2"
        },
        "createdAt": {
          "$date": "2024-08-26T20:32:16.177Z"
        }
      }
    ],
    "createdAt": {
      "$date": "2024-08-26T08:20:48.896Z"
    },
    "__v": 13
  },
  {
    "_id": {
      "$oid": "66cc778309902cf4f05bb0da"
    },
    "commenterId": "66badac8c97888943971763f",
    "comment": "This is the second comment. ",
    "taskId": "43532ea4-293e-4163-9a67-4e4489753606",
    "reactions": [
      {
        "reactedBy": "66badac8c97888943971763f",
        "reaction": "SMILE",
        "_id": {
          "$oid": "66d03da4bcfd632f3d221a58"
        }
      },
      {
        "reactedBy": "66badac8c97888943971763f",
        "reaction": "THUMBS_UP",
        "_id": {
          "$oid": "66d03da8bcfd632f3d221a5c"
        }
      },
      {
        "reactedBy": "66badac8c97888943971763f",
        "reaction": "THUMBS_DOWN",
        "_id": {
          "$oid": "66d03dabbcfd632f3d221a67"
        }
      },
      {
        "reactedBy": "66badac8c97888943971763f",
        "reaction": "THANKS",
        "_id": {
          "$oid": "66d03db1bcfd632f3d221a6e"
        }
      }
    ],
    "replies": [],
    "createdAt": {
      "$date": "2024-08-26T12:39:31.458Z"
    },
    "__v": 6
  },
  {
    "_id": {
      "$oid": "66d03d9ebcfd632f3d221a4a"
    },
    "commenterId": "66badac8c97888943971763f",
    "comment": "Please check the updates ",
    "taskId": "43532ea4-293e-4163-9a67-4e4489753606",
    "reactions": [],
    "replies": [],
    "createdAt": {
      "$date": "2024-08-29T09:21:34.957Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66d05f6bbcfd632f3d222403"
    },
    "commenterId": "66badac8c97888943971763f",
    "comment": "Will work on this ",
    "taskId": "7edd71d8-48b5-4bf6-b6f7-c047787392b5",
    "reactions": [
      {
        "reactedBy": "66badac8c97888943971763f",
        "reaction": "THUMBS_DOWN",
        "_id": {
          "$oid": "66d061eebcfd632f3d22242e"
        }
      }
    ],
    "replies": [],
    "createdAt": {
      "$date": "2024-08-29T11:45:47.259Z"
    },
    "__v": 3
  },
  {
    "_id": {
      "$oid": "66d05f7dbcfd632f3d222407"
    },
    "commenterId": "66badac8c97888943971763f",
    "comment": "Also, update on completion @[Jake Collins](66bfd2b776fa92717662d44c)",
    "taskId": "7edd71d8-48b5-4bf6-b6f7-c047787392b5",
    "reactions": [],
    "replies": [],
    "createdAt": {
      "$date": "2024-08-29T11:46:05.993Z"
    },
    "__v": 0
  }]

const ORG = [{
    "_id": {
      "$oid": "66beb38e168efaf09cb836bd"
    },
    "name": "Org One",
    "workTypes": [
      {
        "id": "Design",
        "name": "Design",
        "color": "#87CEFA",
        "_id": {
          "$oid": "66beb3df47b90484da222a18"
        }
      },
      {
        "name": "Pre Development",
        "_id": {
          "$oid": "66bec4c82388a254a93bc2c9"
        },
        "color": "#98FF98"
      }
    ],
    "sprints": [],
    "__v": 15,
    "boards": [
      {
        "name": "The Lions project",
        "_id": "66c0238dddbf67fa4ef150f3"
      },
      {
        "name": "The Lion's project 4",
        "_id": "66c1864848ce325b5616b648"
      },
      {
        "name": "Internal One",
        "_id": "66c1946a6cb955c39f7e4f2c"
      }
    ]
  }]

const USERS = [{
    "_id": {
      "$oid": "66bada871a8b42999b108df9"
    },
    "name": "Gunjan Kalita",
    "email": "gunjankalita836@gmail.com",
    "password": "$2b$10$3INgX5B63UETpXIx/uM8FeLVCRhKSoyzP0xToINsfxxSlD6pRJzGm",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "66badac8c97888943971763f"
    },
    "name": "Runjan Kalita",
    "email": "runjankalita836@gmail.com",
    "password": "$2b$10$2.1wvj3fg1YgWxbsRvZb.O7pCqsFpInEBtZrAogFuExaS.BPBpDrW",
    "__v": 0,
    "boards": [],
    "organisation": "66beb38e168efaf09cb836bd",
    "role": "admin",
    "online": true
  },
  {
    "_id": {
      "$oid": "66bfce1376fa92717662d42e"
    },
    "name": "John doe",
    "email": "john@example.com",
    "role": "user",
    "password": "$2b$10$MP69qYlTWv0a7ej2l5M0BeKG2NtPL6Srv131rOR2Cax/36vhi1xNS",
    "organisation": "66beb38e168efaf09cb836bd",
    "boards": [
      "66c1864848ce325b5616b648",
      "66c0238dddbf67fa4ef150f3"
    ],
    "__v": 8,
    "online": false
  },
  {
    "_id": {
      "$oid": "66bfd2b776fa92717662d44c"
    },
    "name": "Jake Collins",
    "email": "jakec@gmail.com",
    "role": "user",
    "password": "$2b$10$VFxHpkTn3b7Ujei.S/afqejCqHO8butf2PgR3zn4.IJuEoIejaUS2",
    "organisation": "66beb38e168efaf09cb836bd",
    "boards": [
      "66c1864848ce325b5616b648",
      "66c0238dddbf67fa4ef150f3"
    ],
    "__v": 13,
    "online": false
  },
  {
    "_id": {
      "$oid": "66c828dfecaafab5226907e1"
    },
    "name": "Jack collins",
    "email": "jack@example.com",
    "role": "user",
    "password": "$2b$10$ogRms2OwWKNYBTCQEtQoT.PipNFWuLs7G7Fzh0AF87ypOpoS8ztK.",
    "organisation": "66beb38e168efaf09cb836bd",
    "boards": [
      "66c1864848ce325b5616b648"
    ],
    "createdAt": {
      "$date": "2024-08-23T06:14:55.397Z"
    },
    "__v": 1
  }]

module.exports = {
    BOARD,
    COMMENTS,
    ORG,
    USERS
}