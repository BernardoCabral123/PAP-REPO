CREATE PROCEDURE eliminarArea (IN idArea INT)
BEGIN
	DELETE FROM area WHERE area.idArea = idArea;
END