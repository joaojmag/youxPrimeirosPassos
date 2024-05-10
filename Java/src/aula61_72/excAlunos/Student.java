package excAlunos;

public class Student {

    public String nome;
    public double nota1;
    public double nota2;
    public double nota3;

    public double notaFinal() {
        return nota1 + nota2 + nota3;
    }

    public String toString() {
        return notaFinal() > 59.0 ? String.format("%nFINAL GRADE = %.2f%nPASS", notaFinal()) : String.format("%nFINAL GRADE = %.2f%nFAILED%nMISSING %.2f POINTS", notaFinal(), 60.0 - notaFinal());
    }

}