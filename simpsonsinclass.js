
(function (Scratch) {
  "use strict";

  class SimpsonsInClass {
    getInfo() {
      return {
        id: "simpsonsinclass",
        name: "the simpsons in class",
        blocks: [
          {
            opcode: "execute",
            blockType: Scratch.BlockType.COMMAND,
            text: "execute JS [CODE]",
            arguments: {
              CODE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'console.log("Hello!")'
              }
            }
          },
          {
            opcode: "evaluate",
            blockType: Scratch.BlockType.REPORTER,
            text: "evaluate JS [CODE]",
            arguments: {
              CODE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1 + 1"
              }
            }
          }
        ]
      };
    }

    execute(args) {
      try {
        new Function(String(args.CODE))();
      } catch (e) {
        console.error("[Simpsons in Class]", e);
      }
    }

    evaluate(args) {
      try {
        return new Function(
          "return (" + String(args.CODE) + ")"
        )() ?? "";
      } catch (e) {
        console.error("[Simpsons in Class]", e);
        return "";
      }
    }
  }

  Scratch.extensions.register(new SimpsonsInClass());
})(Scratch);
