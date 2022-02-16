clicemiaAtual = float(input("Clicemia Atual: "))
valorGlicemicoPretendido = float(input("Valor Glicemico Pretendido: "))
resistenciaAinsulina = float(input("Resistencia insulinica: "))
resposta = (clicemiaAtual - valorGlicemicoPretendido) / resistenciaAinsulina
print(resposta)
