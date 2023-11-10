export function areObjectFilled(obj: any) {
  const minLengthRequirements: any = {
    cpf: 14,
    email: 5,
    name: 3,
    phone: 14,
  };

  for (const key in obj) {
    if (!obj[key] || obj[key].length < minLengthRequirements[key]) {
      return false;
    }
  }
  return true;
}
