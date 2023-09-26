const students = [
  {
    name: 'Julia',
    noteFirst: 6,
    noteSecond: 7
  },
  {
    name: 'Pedro',
    noteFirst: 7.5,
    noteSecond: 9
  },
  {
    name: 'Betina',
    noteFirst: 8.5,
    noteSecond: 9.5
  }
]

let averege //variavel que recebe a média

//Essa função faz a média das duas notas dos alunos
function media(noteFirst, noteSecond) {
  averege = (Number(noteFirst) + Number(noteSecond)) / 2
  return averege
}

//função que imprime as médias dos alunos passando como parametro o objeto student
function printNotesStudents(student) {
  return `A média do(a) aluno(a) ${student.name} é: ${media(
      student.noteFirst,
      student.noteSecond
    )}\n`
}

for (let student of students) {
  let studentMessage = printNotesStudents(student)

  if (averege > 7) {
    alert(studentMessage + `Parabéns ${student.name}! Você foi aprovado(a) no concurso.`)
  } else {
    alert(studentMessage + `Não foi dessa vez ${student.name}! Tente novamente.`)
  }
}
