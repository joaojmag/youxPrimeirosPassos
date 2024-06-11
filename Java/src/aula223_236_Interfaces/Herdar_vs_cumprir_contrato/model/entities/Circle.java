package aula223_236_Interfaces.Herdar_vs_cumprir_contrato.model.entities;


import aula223_236_Interfaces.Herdar_vs_cumprir_contrato.model.enums.Color;

public class Circle extends AbstractShape {

	private Double radius;

	public Circle(Color color, Double radius) {
		super(color);
		this.radius = radius;
	}

	public Double getRadius() {
		return radius;
	}

	public void setRadius(Double radius) {
		this.radius = radius;
	}

	@Override
	public double area() {
		return Math.PI * radius * radius;
	}
}
