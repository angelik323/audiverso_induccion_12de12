function getCollisionLevel(level) {
  let colitions = [];

  switch (level) {
    case "1":
      colitions = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292,
        292, 292, 292, 292, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 292,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 292, 292, 292, 292,
        292, 292, 292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
      break;
    case "2":
      colitions = [
        292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0,
        0, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 292, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 292, 0, 0, 292, 0, 0, 292, 292, 292, 292, 292, 292, 0, 0,
        292, 292, 292, 0, 0, 292, 292, 292, 292, 0, 0, 0, 0, 292, 0, 0, 292, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0,
        292, 292, 292, 292, 292, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292,
        292, 292, 292, 0, 0, 0, 0,
      ];
      break;
    case "3":
      colitions = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 250, 250,
        250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0, 0, 250, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 250, 0, 0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 250, 250, 250, 0,
        0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0, 0, 250, 250, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 250, 250, 0, 0, 0, 250, 250, 250, 250, 250, 250,
        250, 250, 250, 250, 250, 250, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0,
      ];
      break;
    case "4":
      colitions = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 250, 250,
        250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0, 0, 250, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250,
        0, 0, 250, 0, 0, 250, 0, 0, 0, 0, 0, 250, 0, 0, 250, 250, 250, 250, 250,
        0, 0, 250, 0, 0, 0, 0, 0, 0, 250, 0, 0, 0, 0, 250, 0, 0, 0, 250, 250, 0,
        0, 0, 0, 0, 250, 250, 0, 0, 250, 250, 0, 0, 0, 250, 250, 250, 250, 250,
        250, 250, 250, 250, 250, 250, 250, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ];
      break;
    case "5":
      colitions = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 250, 250,
        250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0, 0, 250, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250,
        0, 250, 250, 0, 0, 250, 250, 0, 0, 0, 0, 250, 0, 0, 250, 250, 250, 250,
        250, 0, 0, 250, 0, 0, 0, 250, 250, 250, 0, 0, 0, 0, 0, 250, 0, 0, 0,
        250, 250, 0, 0, 250, 250, 250, 250, 0, 0, 0, 250, 250, 0, 0, 0, 250,
        250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
      break;
    case "6":
      colitions = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 250, 250,
        250, 250, 250, 250, 250, 250, 250, 0, 0, 0, 0, 0, 250, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 250, 0, 0, 0, 0, 0, 250, 250, 0, 0, 250, 250, 250, 250, 0, 0,
        250, 0, 0, 0, 0, 0, 250, 250, 250, 0, 250, 0, 0, 250, 0, 250, 250, 250,
        250, 250, 0, 0, 250, 0, 0, 0, 250, 0, 0, 250, 0, 0, 0, 0, 0, 250, 0, 0,
        250, 0, 250, 250, 250, 0, 0, 250, 250, 250, 0, 0, 0, 250, 0, 0, 250,
        250, 250, 250, 250, 0, 0, 250, 250, 250, 250, 250, 250, 250, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
      break;
    case "7":
      colitions = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292,
        292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0, 0, 292, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 292, 0, 0, 292,
        0, 0, 0, 0, 0, 0, 292, 292, 292, 0, 0, 0, 292, 0, 0, 292, 0, 0, 292,
        292, 292, 292, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 292, 292, 292, 292,
        292, 292, 292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
      ];
      break;
    case "8":
      colitions = [
        136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136,
        136, 136, 136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136, 136, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136, 136, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 136, 136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136,
        136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136, 136, 0, 0, 0, 0, 0,
        0, 136, 0, 0, 0, 0, 0, 0, 0, 136, 136, 0, 136, 0, 0, 136, 136, 136, 136,
        136, 0, 0, 136, 0, 0, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136,
        136, 136, 136, 136, 136, 136, 136,
      ];
      break;
    case "9":
      colitions = [
        454, 454, 454, 454, 454, 454, 454, 454, 454, 454, 454, 454, 454, 454,
        454, 454, 454, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 454, 454, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 454, 454, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 454, 454, 454, 454, 454, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 454, 0, 0,
        0, 454, 454, 0, 0, 0, 0, 0, 0, 0, 0, 0, 454, 0, 0, 0, 0, 454, 454, 0, 0,
        0, 0, 0, 0, 0, 0, 454, 0, 0, 0, 0, 0, 454, 454, 0, 0, 0, 0, 454, 454,
        454, 0, 0, 0, 454, 0, 0, 0, 454, 454, 454, 454, 454, 454, 454, 454, 454,
        454, 454, 454, 454, 454, 454, 454, 454,
      ];
      break;
    case "10":
      colitions = [
        454, 454, 454, 454, 454, 454, 454, 454, 454, 454, 454, 454, 454, 454,
        454, 454, 454, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 454, 454, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 454, 454, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 454, 454, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 454, 454, 0, 0,
        454, 454, 0, 0, 0, 0, 0, 0, 454, 454, 454, 454, 454, 0, 0, 0, 454, 454,
        0, 0, 454, 454, 454, 454, 454, 0, 0, 0, 0, 0, 454, 454, 454, 454, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 454, 0, 454, 454, 454, 454, 454, 454, 454, 454,
        454, 454, 454, 454, 454, 454, 454, 454, 454, 454, 454,
      ];
      break;
    case "11":
      colitions = [
        493, 493, 493, 493, 493, 493, 493, 493, 493, 493, 493, 493, 493, 493, 493, 493,
        493, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 493,
        493, 493, 493, 493, 493, 493, 493, 0, 0, 0, 493, 493, 493, 493, 493, 493,
        493, 0, 0, 0, 0, 0, 493, 0, 493, 493, 493, 493, 0, 0, 0, 493,
        493, 0, 0, 0, 0, 0, 493, 0, 0, 0, 0, 0, 0, 493, 0, 493,
        493, 493, 493, 493, 0, 0, 0, 493, 493, 493, 493, 493, 493, 493, 0, 493,
        493, 0, 0, 0, 0, 0, 0, 0, 0, 0, 493, 493, 493, 493, 0, 493,
        493, 0, 0, 0, 493, 0, 493, 493, 493, 0, 0, 0, 0, 0, 0, 493,
        493, 493, 493, 493, 493, 493, 493, 493, 493, 493, 493, 493, 493, 493, 493, 493
      ];
      break;
    case "12":
      colitions = [
        361, 361, 361, 361, 361, 361, 361, 361, 361, 361, 361, 361, 361, 361,
        361, 361, 361, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 361, 361, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 361, 0, 0, 0, 0, 361, 361, 0, 0, 0, 0, 0, 0, 0,
        361, 0, 361, 0, 0, 0, 0, 361, 361, 0, 0, 0, 0, 361, 361, 0, 0, 0, 361,
        361, 361, 361, 361, 361, 361, 0, 0, 0, 361, 0, 0, 361, 361, 361, 0, 0,
        0, 0, 0, 361, 361, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 361, 361,
        0, 361, 361, 361, 361, 361, 361, 361, 361, 361, 361, 361, 361, 361, 361,
        361, 361, 361, 361, 361, 361, 361, 361, 361, 361, 361, 361, 361, 361,
        361, 361,
      ];
      break;
    case "13":
      colitions = [
        693, 693, 693, 0, 0, 0, 693, 693, 693, 693, 693, 693, 0, 0, 693, 693,
        693, 0, 0, 693, 693, 693, 0, 0, 0, 0, 0, 0, 693, 693, 0, 693, 693, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 693, 693, 0, 0, 0, 0, 0, 0, 693,
        693, 693, 693, 0, 0, 0, 693, 693, 693, 693, 693, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 693, 693, 693, 693, 693, 693, 693, 0, 0, 0, 0, 0, 0, 0, 0, 693,
        693, 693, 693, 693, 693, 693, 693, 693, 693, 693, 693, 693, 0, 693, 693,
        693, 693, 693, 693, 693, 693, 693, 693, 693, 693, 693, 693, 693, 693,
        693, 693, 693, 693, 693, 693, 693, 693, 693, 693, 693, 693, 693, 693,
        693, 693, 693, 693, 693, 693, 693, 693,
      ];
      break;
    case "14":
      colitions = [
        1871, 1871, 1871, 1871, 1871, 1871, 1871, 1871, 1871, 1871, 1871, 1871,
        1871, 1871, 1871, 1871, 1871, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1871, 1871, 0, 0, 0, 0, 0, 1871, 0, 0, 1871, 0, 0, 0, 0, 0, 1871, 1871,
        0, 0, 0, 1871, 0, 1871, 1871, 1871, 1871, 0, 1871, 0, 0, 0, 1871, 1871,
        1871, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1871, 1871, 1871, 0, 0, 0, 0,
        0, 0, 1871, 0, 0, 0, 1871, 0, 0, 0, 1871, 1871, 0, 0, 1871, 1871, 1871,
        1871, 1871, 1871, 1871, 1871, 1871, 1871, 0, 0, 1871, 1871, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1871, 1871, 1871, 1871, 1871, 1871, 1871,
        1871, 1871, 1871, 1871, 1871, 1871, 1871, 1871, 1871, 1871,
      ];
      break;
    default:
      colitions = [];
  }
  colitions = colitions.map((value) => value * porcX);
  return colitions;
}
