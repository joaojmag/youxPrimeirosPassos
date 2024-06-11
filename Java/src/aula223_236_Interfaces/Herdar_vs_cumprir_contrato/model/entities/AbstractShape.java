package aula223_236_Interfaces.Herdar_vs_cumprir_contrato.model.entities;


import aula223_236_Interfaces.Herdar_vs_cumprir_contrato.model.enums.Color;

public abstract class AbstractShape implements Shape {

	private Color color;

	public AbstractShape(Color color) {
		this.color = color;
	}

	public Color getColor() {
		return color;
	}

	public void setColor(Color color) {
		this.color = color;
	}
}
