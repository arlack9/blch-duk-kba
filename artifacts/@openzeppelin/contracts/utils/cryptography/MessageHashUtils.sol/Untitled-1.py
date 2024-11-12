class ComplexNo:
    def __init__(self):
        self.a = 7 + 5j
        self.b = 5 + 7j

        self.c = self.a + self.b
        self.d = self.a - self.b

    def display(self):
        print("Addition:", self.c)
        print("Subtraction:", self.d)

complex_number = ComplexNo()

complex_number.display()
