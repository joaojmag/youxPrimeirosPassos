package aula84_103.listas.exeListaFixacao;

public class Employee {
    private Integer id;
    private String nome;
    private Double salario;

    public Employee(int id, String nome, double salario) {
        this.id = id;
        this.nome = nome;
        this.salario = salario;
    }

    public Integer getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    public void increaseSalary(double percentage) {
        this.salario = salario * (1 + percentage / 100.0);
    }

}