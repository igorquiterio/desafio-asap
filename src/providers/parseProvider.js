export const parseCep = (value) => {
  if (!value) {
    return "";
  }
  value = value.replace("-", "");
  value = value.split("");
  if (value.length > 5) {
    value.splice(5, 0, "-");
  }
  value = value.join("");
  return value;
};

export const parseCpf = (value) => {
  if (!value) {
    return "";
  }
  value = value.replace(".", "").replace("-", "");
  value = value.split("");
  if (value.length > 3) {
    value.splice(3, 0, ".");
  }
  if (value.length > 7) {
    if (value[7] !== ".") {
      value.splice(7, 0, ".");
    }
  }
  if (value.length > 11) {
    value.splice(11, 0, "-");
  }
  value = value.join("");
  return value;
};

export const parsePhone = (value) => {
  if (!value) {
    return "";
  }
  value = value.replace("-", "").replace("(", "").replace(")", "");
  value = value.split("");
  if (value.length > 2) {
    value.splice(0, 0, "(");
    value.splice(3, 0, ")");
  }
  if (value.length > 8) {
    value.splice(8, 0, "-");
  }
  if (value.length > 13) {
    value.splice(8, 1);
    value.splice(9, 0, "-");
  }
  value = value.join("");
  return value;
};

export const parseDate = (value) => {
  if (!value) {
    return "";
  }
  value = value.replace(/\//g, "");
  value = value.split("");
  if (value.length > 2) {
    value.splice(2, 0, "/");
  }
  if (value.length > 5) {
    value.splice(5, 0, "/");
  }
  if (value.length > 10) {
    value = value.slice(0, 10);
  }
  value = value.join("");
  return value;
};
