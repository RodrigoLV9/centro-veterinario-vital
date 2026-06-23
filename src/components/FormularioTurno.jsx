import { useState } from 'react';

export default function FormularioTurno() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    nombreMascota: '',
    especie: '',
    fecha: '',
    hora: '',
    motivo: '',
  });

  const [mensajeExito, setMensajeExito] = useState(false);
  const [error, setError] = useState('');
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setEnviando(true);

    const vacio = Object.values(form).some((v) => v.trim() === '');

    if (vacio) {
      setError('Todos los campos son obligatorios.');
      setEnviando(false);
      return;
    }

    setTimeout(() => {
      setForm({
        nombre: '',
        email: '',
        telefono: '',
        nombreMascota: '',
        especie: '',
        fecha: '',
        hora: '',
        motivo: '',
      });
      setMensajeExito(true);
      setEnviando(false);
    }, 1500);
  };

  if (mensajeExito) {
    return (
      <div className="rounded-lg bg-green-100 p-4 text-green-800">
        ¡Turno solicitado con éxito! Te contactaremos para confirmar.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-2xl font-semibold text-vital-dark">
        Solicitar Turno
      </h2>

      {error && (
        <p className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="mb-4 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-vital-dark">
            Nombre
          </label>
          <input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-vital-dark outline-none transition focus:ring-2 focus:ring-vital-primary"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-vital-dark">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-vital-dark outline-none transition focus:ring-2 focus:ring-vital-primary"
          />
        </div>
      </div>

      <div className="mb-4 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-vital-dark">
            Teléfono
          </label>
          <input
            name="telefono"
            type="tel"
            value={form.telefono}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-vital-dark outline-none transition focus:ring-2 focus:ring-vital-primary"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-vital-dark">
            Nombre de la Mascota
          </label>
          <input
            name="nombreMascota"
            value={form.nombreMascota}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-vital-dark outline-none transition focus:ring-2 focus:ring-vital-primary"
          />
        </div>
      </div>

      <div className="mb-4 grid gap-4 md:grid-cols-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-vital-dark">
            Especie
          </label>
          <select
            name="especie"
            value={form.especie}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-vital-dark outline-none transition focus:ring-2 focus:ring-vital-primary"
          >
            <option value="">Seleccionar</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-vital-dark">
            Fecha
          </label>
          <input
            name="fecha"
            type="date"
            value={form.fecha}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-vital-dark outline-none transition focus:ring-2 focus:ring-vital-primary"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-vital-dark">
            Hora
          </label>
          <input
            name="hora"
            type="time"
            value={form.hora}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-vital-dark outline-none transition focus:ring-2 focus:ring-vital-primary"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="mb-1 block text-sm font-medium text-vital-dark">
          Motivo de la consulta
        </label>
        <textarea
          name="motivo"
          rows={4}
          value={form.motivo}
          onChange={handleChange}
          className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-vital-dark outline-none transition focus:ring-2 focus:ring-vital-primary"
        />
      </div>

      <button
        type="submit"
        disabled={enviando}
        className="w-full rounded-lg bg-vital-primary px-6 py-3 font-semibold text-white transition hover:bg-teal-700 disabled:opacity-60"
      >
        {enviando ? 'Enviando...' : 'Solicitar Turno'}
      </button>
    </form>
  );
}
