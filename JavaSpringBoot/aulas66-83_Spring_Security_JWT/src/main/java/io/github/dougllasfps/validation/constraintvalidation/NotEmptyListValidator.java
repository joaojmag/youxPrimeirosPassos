package io.github.dougllasfps.validation.constraintvalidation;

import io.github.dougllasfps.validation.NotEmptyList;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.util.List;

public class NotEmptyListValidator
        implements ConstraintValidator<NotEmptyList, List> {

    @Override
    public boolean isValid(List list,
                           ConstraintValidatorContext constraintValidatorContext) {
        return list != null && !list.isEmpty();
    }

    @Override
    public void initialize(NotEmptyList constraintAnnotation) {
    }
}
