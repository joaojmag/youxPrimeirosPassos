package aula223_236_Interfaces.Herdar_vs_cumprir_contrato.application;


import aula223_236_Interfaces.Herdar_vs_cumprir_contrato.model.entities.AbstractShape;
import aula223_236_Interfaces.Herdar_vs_cumprir_contrato.model.entities.Circle;
import aula223_236_Interfaces.Herdar_vs_cumprir_contrato.model.entities.Rectangle;
import aula223_236_Interfaces.Herdar_vs_cumprir_contrato.model.enums.Color;

public class Program {

	public static void main(String[] args) {

		AbstractShape s1 = new Circle(Color.BLACK, 2.0);
		AbstractShape s2 = new Rectangle(Color.WHITE, 3.0, 4.0);
		
		System.out.println("Circle color: " + s1.getColor());
		System.out.println("Circle area: " + String.format("%.3f", s1.area()));
		System.out.println("Rectangle color: " + s2.getColor());
		System.out.println("Rectangle area: " + String.format("%.3f", s2.area()));
	}
}
