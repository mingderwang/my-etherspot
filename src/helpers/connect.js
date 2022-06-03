export async function fetchData() {
  return new Promise((resolve, reject) => {
    try {
      const data = { user: "ming" };
      resolve(data);
    } catch (error) {
      reject("error");
    }
  });
}
