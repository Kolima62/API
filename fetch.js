export async function fetchData({ url, query = "", method, data }) {
  const result = await fetch(`${url}${query ? query : ""}`, {
    // method est ce qu'on fait avec l'API ( poster, supprimer ... )
    method: method || "GET",
    headers: {
      // type de fichiers acceptés dans l'API
      Accept: `Application/json`,
      "content-type": "application/json",
    },
    //   body: `{"titre": "test", "content"; "mon contenu"}`,
    //   (fait la mm chose que la ligne du dessous)
    body: data ? JSON.stringify(data) : data,
  });

  console.log(result);
  if (result.ok === true) {
    return result.json();
  }
  throw new Error("Erreur request");

  users
    // then r => r.jason transforme ce qui a été
    // fetch au dessus en fichier json afin d'être lisible par Javascript
    .then((r) => r.json())
    //   then data => clg data affiche ensuite les donnée de ce fichier json
    .then((data) => console.log(data))
    //   catch est ce qui se passe s'il n'a pas réussi a faire les actions du dessus
    .catch((e) => console.log(e))
    //   finally est une action qu'il fait a la fin peu importe quoi même s'il ne réussi rien avant
    .finally(() => console.log("fini"));
}
