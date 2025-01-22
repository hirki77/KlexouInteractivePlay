const questions = [
  {
    question: "Quel est un bon exemple de pseudo pour Internet ?",
    options: ["CM2-2002", "Adele10poitiers", "Zorglub"],
    correct: 2,
    feedback: "Le pseudo doit être anonyme et ne pas révéler d'informations personnelles."
  },
  {
    question: "Avant de publier quelque chose sur Internet, tu dois :",
    options: [
      "Demander à tes parents si c'est approprié",
      "Chercher la réponse sur Internet",
      "Demander à tes amis ce qu'ils en pensent"
    ],
    correct: 0,
    feedback: "C'est toujours une bonne idée de demander à tes parents avant de publier quoi que ce soit."
  },
  {
    question: "Pourquoi est-il important de respecter les autres sur Internet ?",
    options: [
      "Parce que sur Internet, il n'y a pas de conséquences",
      "Parce qu'on doit respecter les autres, que ce soit dans la rue ou sur Internet",
      "Parce que les gens sur Internet sont toujours très gentils"
    ],
    correct: 1,
    feedback: "Respecter les autres, c'est essentiel, peu importe où on se trouve."
  },
  {
    question: "Que faire si tu reçois un e-mail suspect te proposant un jeu vidéo gratuit ?",
    options: [
      "Tu t'inscris immédiatement pour recevoir le jeu",
      "Tu supprimes l'e-mail sans y répondre",
      "Tu réponds à l'e-mail pour demander plus d'infos"
    ],
    correct: 1,
    feedback: "Les e-mails suspects peuvent souvent être des arnaques. Il vaut mieux les ignorer."
  },
  {
    question: "Que signifie 'contrôle parental' sur Internet ?",
    options: [
      "C'est un système permettant aux parents de gérer les activités en ligne de leurs enfants",
      "C'est un mot de passe pour accéder à des sites web",
      "C'est un logiciel qui améliore la vitesse de l'Internet"
    ],
    correct: 0,
    feedback: "Le contrôle parental aide à protéger les enfants des contenus inappropriés sur Internet."
  },
  {
    question: "Qu'est-ce qu'une addiction à Internet ?",
    options: [
      "Le fait de passer trop de temps sur Internet sans pouvoir s'arrêter",
      "Le fait d'utiliser Internet pour travailler efficacement",
      "Le fait de se rendre sur Internet uniquement pour se divertir"
    ],
    correct: 0,
    feedback: "Une addiction à Internet peut être néfaste pour ta santé et ton bien-être."
  },
  {
    question: "Un bon mot de passe doit être :",
    options: [
      "Ta date de naissance",
      "Ton prénom",
      "Un mélange de lettres, chiffres et symboles"
    ],
    correct: 2,
    feedback: "Utiliser un mot de passe complexe est essentiel pour protéger tes informations."
  },
  {
    question: "Que représente une 'trace numérique' ?",
    options: [
      "C'est l'historique des sites que tu as visités en ligne",
      "C'est une opération technique permettant de sécuriser ta connexion",
      "C'est un type de virus informatique"
    ],
    correct: 0,
    feedback: "Il est important de gérer ses traces numériques pour préserver ta vie privée."
  },
  {
    question: "Sur Internet, tu réfléchis bien avant de publier quoi que ce soit, car :",
    options: [
      "Tu es responsable de ce que tu publies",
      "Tout le monde peut te copier",
      "C'est toujours visible par tout le monde"
    ],
    correct: 0,
    feedback: "Exactement ! Ce que tu publies en ligne peut avoir des conséquences durables."
  },
  {
    question: "Quand tu cherches des informations sur un site web, tu dois :",
    options: [
      "Te fier uniquement à ce que disent tes amis",
      "Vérifier la source et les informations pour voir si elles sont fiables",
      "Croire tout ce que tu lis"
    ],
    correct: 1,
    feedback: "Toujours vérifier les sources pour éviter de diffuser de fausses informations."
  },
  {
    question: "Si tu veux t'inscrire sur un réseau social, tu dois d'abord :",
    options: [
      "Demander à tes parents et t'assurer que c'est approprié pour ton âge",
      "T'inscrire sans leur en parler",
      "Regarder si tes amis l'utilisent avant de t'inscrire"
    ],
    correct: 0,
    feedback: "Il est important de demander l'avis de tes parents avant de t'inscrire."
  },
  {
    question: "Si tu vois quelque chose de choquant sur Internet, tu devrais :",
    options: [
      "Ne rien dire et ignorer la situation",
      "En parler immédiatement à un adulte de confiance",
      "Le signaler à un site web ou une autorité compétente"
    ],
    correct: 1,
    feedback: "En parler à un adulte ou signaler le contenu peut t'aider à rester en sécurité."
  },
  {
    question: "Pour utiliser Internet sans risque, tu devrais :",
    options: [
      "Naviguer dans une pièce commune où tes parents peuvent te surveiller",
      "Passer beaucoup de temps sur Internet seul(e) dans ta chambre",
      "Utiliser Internet uniquement pendant les vacances"
    ],
    correct: 0,
    feedback: "Utiliser Internet dans un espace commun te permet de rester en sécurité et d'éviter les mauvaises habitudes."
  }
];

const quizContainer = document.getElementById("quiz-container");
const exportButton = document.getElementById("export-btn");

let userAnswers = [];
let questionIndex = 0;

function loadQuestion(index) {
  if (index >= questions.length) {
    showResults();
    return;
  }

  const questionObj = questions[index];
  quizContainer.innerHTML = `
    <div class="question">${questionObj.question}</div>
    <div class="answers">
      ${questionObj.options
        .map(
          (option, i) =>
            `<button onclick="submitAnswer(${i})">${option}</button>`
        )
        .join("")}
    </div>
  `;
}

function submitAnswer(answerIndex) {
  const questionObj = questions[questionIndex];
  const correct = answerIndex === questionObj.correct;
  const feedback = questionObj.feedback;

  userAnswers.push({
    question: questionObj.question,
    answer: questionObj.options[answerIndex],
    correct,
    feedback
  });

  questionIndex++;
  loadQuestion(questionIndex);
}

function showResults() {
  quizContainer.innerHTML = "<h2>Merci d'avoir répondu aux questions !</h2>";
  exportButton.style.display = "inline-block";
}

function exportResults() {
  const results = userAnswers.map((answer) => {
    return `Question: ${answer.question}\nRéponse donnée: ${answer.answer}\nBonne réponse: ${
      answer.correct ? "Oui" : "Non"
    }\nRetour: ${answer.feedback}\n\n`;
  }).join("");
  
  const blob = new Blob([results], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "resultats_quiz.txt";
  link.click();
}

exportButton.addEventListener("click", exportResults);

loadQuestion(questionIndex);
