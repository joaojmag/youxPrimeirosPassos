package aula84_103.vetores.exeFixacao;

public class Pensionato {

    private String nome;
    private String email;
    private int numQuarto;

    public Pensionato(String nome, String email, int numQuarto) {
        this.nome = nome;
        this.email = email;
        this.numQuarto = numQuarto;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getNumQuarto() {
        return numQuarto;
    }

    public void setNumQuarto(int numQuarto) {
        this.numQuarto = numQuarto;
    }

}