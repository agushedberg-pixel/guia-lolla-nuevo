import { useState } from 'react'

export default function App() {
  const [activeTab, setActiveTab] = useState(0)
  const [checklist, setChecklist] = useState<Record<number, boolean>>({})

  const toggleCheck = (index: number) => {
    setChecklist(prev => ({ ...prev, [index]: !prev[index] }))
  }

  const totalChecks = 20
  const completedChecks = Object.values(checklist).filter(Boolean).length

  const shareWhatsApp = () => {
    const url = window.location.href
    const text = `🎵 GUÍA HEDBERG - LOLLA 2026 🎵%0A%0AHorarios, ruta recomendada y checklist para Augusta, Steffany y Bayron.%0A%0A👉 ${url}%0A%0A✅ Guarden el link%0A✅ Activen "Agregar a inicio" para usar sin internet`
    window.open(`https://wa.me/?text=${text}`, '_blank')
  }

  return (
    <div>
      {/* HEADER */}
      <header style={{
        background: '#f9c800',
        borderRadius: '16px',
        padding: '18px 20px',
        marginBottom: '14px',
        textAlign: 'center',
        border: '2px solid rgba(0,0,0,0.08)'
      }}>
        <div style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginBottom: '4px' }}>
          Lollapalooza Chile 2026 · Parque O'Higgins
        </div>
        <h1 style={{ fontFamily: 'Bebas Neue', fontSize: '38px', lineHeight: 1, color: '#000', margin: 0 }}>
          GUÍA HEDBERG ⚡
        </h1>
        <p style={{ fontSize: '11px', color: 'rgba(0,0,0,0.55)', marginTop: '4px' }}>
          Augusta · Steffany · Bayron · Viernes 13 de Marzo
        </p>
      </header>

      {/* BOTÓN WHATSAPP */}
      <button
        onClick={shareWhatsApp}
        style={{
          width: '100%',
          background: '#25D366',
          color: 'white',
          border: 'none',
          padding: '14px',
          borderRadius: '12px',
          fontSize: '14px',
          fontWeight: '700',
          marginBottom: '14px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}
      >
        📱 Compartir por WhatsApp
      </button>

      {/* TABS */}
      <div style={{ display: 'flex', gap: '5px', marginBottom: '14px', overflowX: 'auto' as any, scrollbarWidth: 'none' as any }}>
        {['📅 Horarios', '🗺️ Mapa', '📵 Sin Señal', '✅ Checklist'].map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            style={{
              flexShrink: 0,
              padding: '8px 13px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: '700',
              border: '1.5px solid rgba(0,0,0,0.08)',
              background: activeTab === i ? '#f9c800' : '#ffffff',
              color: activeTab === i ? '#000' : '#6b7a8d',
              cursor: 'pointer',
              whiteSpace: 'nowrap' as any
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TAB 0 - HORARIOS */}
      {activeTab === 0 && (
        <div>
          {/* RUTA RECOMENDADA DESTACADA */}
          <div style={{
            background: '#fff3e0',
            border: '2px solid #e65100',
            borderRadius: '14px',
            padding: '16px',
            marginBottom: '14px'
          }}>
            <h3 style={{ color: '#e65100', fontSize: '14px', fontWeight: '800', marginBottom: '10px', textTransform: 'uppercase' }}>
              ⭐ RUTA RECOMENDADA - GRUPO UNIDO
            </h3>
            <p style={{ fontSize: '12px', color: '#4e342e', marginBottom: '10px', lineHeight: 1.5 }}>
              <strong>EL GRUPO DEBE ESTAR JUNTO EN TODOS LOS SHOWS MARCADOS CON ⭐</strong>
            </p>
            <div style={{ fontSize: '11px', color: '#4e342e', lineHeight: 1.8 }}>
              <div><strong>16:00</strong> - LANY (Alternative) ⭐</div>
              <div><strong>18:00</strong> - RUEL (Cenco Malls) ⭐</div>
              <div><strong>19:00</strong> - Horsegirl (Perry's) ⭐</div>
              <div><strong>20:00</strong> - Doechii (Cenco Malls) ⭐</div>
              <div><strong>21:30</strong> - Ben Böhmer (Perry's) ⭐</div>
              <div><strong>22:15</strong> - Sabrina Carpenter (Cenco Malls) ⭐</div>
            </div>
          </div>

          {/* HORARIOS COMPLETOS */}
          <div style={{
            background: '#ffffff',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: '14px',
            padding: '14px',
            marginBottom: '10px'
          }}>
            <div style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#6b7a8d', marginBottom: '10px' }}>
              Viernes 13 · Apertura puertas 13:00 hrs
            </div>

            <div style={{ fontSize: '10px', lineHeight: 2 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '50px 1fr 1fr', gap: '4px', fontWeight: '700', marginBottom: '8px', padding: '8px', background: '#f0fafe', borderRadius: '8px' }}>
                <div>Hora</div>
                <div>Escenario</div>
                <div>Artista</div>
              </div>
              
              {[
                { time: '13:45', stage: 'Banco Chile', artist: 'Dracma' },
                { time: '14:00', stage: 'Alternative', artist: 'Cleaver' },
                { time: '14:00', stage: "Perry's", artist: 'Benja Valencia' },
                { time: '14:30', stage: 'Cenco Malls', artist: 'The Warning' },
                { time: '15:00', stage: 'Banco Chile', artist: 'Bad Nerves' },
                { time: '15:00', stage: "Perry's", artist: 'Bryartz' },
                { time: '15:00', stage: 'Kidzapalooza', artist: 'Los Machinga' },
                { time: '16:00', stage: 'Cenco Malls', artist: 'Gepe' },
                { time: '16:00', stage: 'Alternative', artist: '⭐ LANY', highlight: true },
                { time: '16:00', stage: "Perry's", artist: 'Saske' },
                { time: '16:00', stage: 'Lotus', artist: 'Consequence of Energy' },
                { time: '17:00', stage: 'Banco Chile', artist: 'Airbag' },
                { time: '17:00', stage: "Perry's", artist: '3ballmty' },
                { time: '18:00', stage: 'Cenco Malls', artist: '⭐ RUEL', highlight: true },
                { time: '18:00', stage: 'Alternative', artist: 'Viagra Boys' },
                { time: '18:00', stage: "Perry's", artist: 'Six Sex' },
                { time: '18:00', stage: 'Lotus', artist: 'Drink The Sea' },
                { time: '18:00', stage: 'Kidzapalooza', artist: '31 Minutos' },
                { time: '19:00', stage: 'Banco Chile', artist: 'Interpol' },
                { time: '19:00', stage: "Perry's", artist: '⭐ HORSEGIRL', highlight: true },
                { time: '19:00', stage: 'Lotus', artist: 'Amigo de Artistas' },
                { time: '20:00', stage: 'Cenco Malls', artist: '🔥 DOECHII', highlight: true },
                { time: '20:00', stage: 'Alternative', artist: 'Men I Trust' },
                { time: '20:00', stage: "Perry's", artist: 'Bunt.' },
                { time: '21:00', stage: 'Banco Chile', artist: 'Deftones' },
                { time: '21:00', stage: 'Lotus', artist: 'La Planta' },
                { time: '21:30', stage: "Perry's", artist: '🔥 BEN BÖHMER', highlight: true },
                { time: '22:15', stage: 'Cenco Malls', artist: '⭐ SABRINA CARPENTER', highlight: true },
                { time: '22:15', stage: 'Alternative', artist: 'Tom Morello' },
                { time: '22:15', stage: 'Lotus', artist: 'Gondwana' },
                { time: '23:15', stage: 'Banco Chile', artist: 'Young Monster' },
                { time: '23:15', stage: "Perry's", artist: 'Kygo' },
              ].map((show, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '50px 1fr 1fr',
                    gap: '4px',
                    padding: '6px 8px',
                    borderRadius: '6px',
                    marginBottom: '2px',
                    background: show.highlight ? '#fff3e0' : 'transparent',
                    border: show.highlight ? '1px solid #e65100' : 'none'
                  }}
                >
                  <div style={{ fontSize: '9px', fontWeight: '700', color: '#6b7a8d' }}>{show.time}</div>
                  <div style={{ fontSize: '9px', fontWeight: '600' }}>{show.stage}</div>
                  <div style={{ fontSize: '9px', fontWeight: show.highlight ? '800' : '600', color: show.highlight ? '#e65100' : '#1a1a2e' }}>{show.artist}</div>
                </div>
              ))}
            </div>
          </div>

          {/* LEYENDA */}
          <div style={{
            background: '#e0f7f4',
            border: '1.5px solid #00796b',
            borderRadius: '10px',
            padding: '12px',
            fontSize: '11px',
            color: '#00796b',
            fontWeight: '600',
            lineHeight: 1.5
          }}>
            ⭐ = Ruta Hedberg (grupo unido) · El resto del cartel está visible para referencia
          </div>
        </div>
      )}

      {/* TAB 1 - MAPA */}
      {activeTab === 1 && (
        <div>
          <div style={{
            background: '#e8f5e9',
            border: '1.5px solid rgba(0,0,0,0.1)',
            borderRadius: '14px',
            overflow: 'hidden',
            marginBottom: '14px'
          }}>
            <div style={{
              background: '#fff',
              padding: '8px 12px',
              fontSize: '9px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#6b7a8d',
              textAlign: 'center',
              borderBottom: '1px solid rgba(0,0,0,0.08)'
            }}>
              Parque O'Higgins — Distribución oficial
            </div>
            <div style={{ padding: '20px', textAlign: 'center', color: '#6b7a8d', fontSize: '12px' }}>
              🗺️ Mapa del festival<br/><br/>
              <strong>Cenco Malls:</strong> Centro<br/>
              <strong>Banco Chile:</strong> Noreste<br/>
              <strong>Alternative:</strong> Noroeste<br/>
              <strong>Perry's:</strong> Este (Arena)<br/>
              <strong>Lotus:</strong> Centro-sur<br/>
              <strong>Kidzapalooza:</strong> Suroeste
            </div>
          </div>

          <div style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#6b7a8d', margin: '14px 0 8px', display: 'flex', alignItems: 'center', gap: '7px' }}>
            Ruta paso a paso
            <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.08)' }} />
          </div>

          {[
            { n: 1, color: '#e65100', from: 'Entrar Matta → Alternative Stage', detail: 'Caminar al norte-izquierda desde acceso Matta', walk: '🚶 5 min · llegar 15:45' },
            { n: 2, color: '#e91e8c', from: 'Alternative → Cenco Malls', detail: 'Bajar al centro-sur hasta la Elipse', walk: '🚶 8 min · salir 17:00' },
            { n: 3, color: '#6a1b9a', from: "Cenco → Perry's (Arena)", detail: 'Cruzar hacia la derecha del parque', walk: '🚶 7 min · salir 18:50' },
            { n: 4, color: '#e91e8c', from: "Perry's → Cenco (Doechii)", detail: 'Volver. Comer en Food Garden en el camino', walk: '🚶 7 min · salir 19:40' },
            { n: 5, color: '#6a1b9a', from: "Cenco → Perry's (Ben Böhmer)", detail: 'Cruzar de vuelta al Arena', walk: '🚶 7 min · salir 21:05' },
            { n: 6, color: '#1b7a3a', from: "Perry's → Cenco ¡RÁPIDO! (Sabrina)", detail: 'Ir directo. Va a estar masivo.', walk: '⚡ 7 min · salir 22:05' },
          ].map((step, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'flex-start',
              padding: '11px 12px',
              background: '#ffffff',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '12px',
              marginBottom: '7px'
            }}>
              <div style={{
                width: '26px',
                height: '26px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: '800',
                flexShrink: 0,
                color: '#fff',
                background: step.color
              }}>{step.n}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '13px', fontWeight: '800', color: step.color }}>{step.from}</div>
                <div style={{ fontSize: '11px', color: '#6b7a8d', marginTop: '2px', lineHeight: 1.4 }}>{step.detail}</div>
                <span style={{
                  display: 'inline-block',
                  fontSize: '10px',
                  fontWeight: '700',
                  padding: '2px 9px',
                  borderRadius: '20px',
                  marginTop: '5px',
                  color: '#fff',
                  background: step.color
                }}>{step.walk}</span>
              </div>
            </div>
          ))}

          <div style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#6b7a8d', margin: '14px 0 8px', display: 'flex', alignItems: 'center', gap: '7px' }}>
            Si se pierden
            <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.08)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '7px', marginBottom: '10px' }}>
            {[
              { n: 'M1', name: 'Acceso MATTA', desc: 'Sur-derecha. Will Call + Lost&Found aquí.' },
              { n: 'M2', name: 'LOLLA STORE', desc: 'Centro del parque. Toldo morado visible.' },
              { n: 'M3', name: 'RONDIZZONI', desc: 'Sur-izquierda. Staff siempre presente.' },
            ].map((m, i) => (
              <div key={i} style={{
                background: '#ffffff',
                border: '1.5px solid #f9c800',
                borderRadius: '12px',
                padding: '10px 8px',
                textAlign: 'center'
              }}>
                <div style={{ fontFamily: 'Bebas Neue', fontSize: '28px', color: '#c47d00', lineHeight: 1 }}>{m.n}</div>
                <div style={{ fontSize: '10px', fontWeight: '700', marginTop: '2px', lineHeight: 1.2 }}>{m.name}</div>
                <div style={{ fontSize: '9px', color: '#6b7a8d', marginTop: '3px', lineHeight: 1.3 }}>{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2 - SIN SEÑAL */}
      {activeTab === 2 && (
        <div>
          <div style={{
            background: '#fff3e0',
            border: '1.5px solid #ff8a65',
            borderRadius: '14px',
            padding: '14px',
            marginBottom: '10px'
          }}>
            <div style={{ fontSize: '11px', fontWeight: '800', color: '#bf360c', marginBottom: '10px', letterSpacing: '.5px' }}>
              📵 PLAN SIN SEÑAL — acuerden ANTES de entrar
            </div>
            {[
              { n: 1, text: 'Punto fijo: si se pierden, todos van a M1 — Entrada Matta. Sin excepciones.' },
              { n: 2, text: 'Captura este mapa ahora — screenshot. Sin internet igual lo tienen.' },
              { n: 3, text: 'Número en la muñeca con plumón antes de entrar.' },
              { n: 4, text: 'SMS funciona sin datos — mandan texto si no carga WhatsApp.' },
              { n: 5, text: 'Modo avión + WiFi ahorra batería sin perder mapas.' },
              { n: 6, text: 'Totalmente perdidos: ir al Lost&Found junto a Matta — staff con radio.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '7px',
                  background: '#ff8a65',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: '800',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>{item.n}</div>
                <div style={{ fontSize: '12px', color: '#4e342e', lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: item.text.replace(/(.*?:)/, '<strong>$1</strong>') }} />
              </div>
            ))}
          </div>

          <div style={{
            background: '#fffde7',
            border: '1.5px solid #f9c800',
            borderRadius: '14px',
            padding: '14px',
            marginBottom: '10px'
          }}>
            <div style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', color: '#c47d00', marginBottom: '10px' }}>
              Horarios fijos de encuentro — M1 Matta
            </div>
            {[
              { time: '16:00', where: 'M1 Matta — al entrar', note: 'Si alguien llega tarde' },
              { time: '19:40', where: 'M1 Matta — antes Doechii', note: 'El show más masivo del día' },
              { time: '22:05', where: 'Frente a Cenco — Sabrina', note: 'Juntarse antes del cierre' },
              { time: '23:25', where: 'Mismo spot en Sabrina', note: 'Para salir juntos por Tupper' },
            ].map((t, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '9px 10px',
                background: '#fff',
                borderRadius: '10px',
                border: '1px solid rgba(0,0,0,0.07)',
                marginBottom: '6px'
              }}>
                <div style={{ fontFamily: 'Bebas Neue', fontSize: '22px', color: '#c47d00', minWidth: '55px' }}>{t.time}</div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: '700' }}>{t.where}</div>
                  <div style={{ fontSize: '10px', color: '#6b7a8d', marginTop: '1px' }}>{t.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3 - CHECKLIST */}
      {activeTab === 3 && (
        <div>
          <div style={{
            background: '#e8f5e9',
            border: '1.5px solid #66bb6a',
            borderRadius: '14px',
            padding: '14px',
            marginBottom: '10px'
          }}>
            <div style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', color: '#1b5e20', marginBottom: '10px' }}>
              Sabrina termina ~23:35 — plan de salida
            </div>
            {[
              { icon: '⏰', text: '23:25 — juntarse los 3 en el mismo spot del show.' },
              { icon: '🚪', text: 'Salir por TUPPER — más cercano a Cenco, menos gente.' },
              { icon: '🚇', text: 'Metro Parque O'Higgins L2 con refuerzo nocturno.' },
              { icon: '🚕', text: 'Uber/Cabify: pedir en Av. Rondizzoni, no en la puerta.' },
              { icon: '📍', text: 'Si se separan: McDonalds Estación Central — abierto 24h.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '9px', fontSize: '12px', color: '#2e4a2e', marginBottom: '7px', lineHeight: 1.45 }}>
                <span style={{ fontSize: '15px', flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
                <span dangerouslySetInnerHTML={{ __html: item.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </div>
            ))}
          </div>

          <div style={{
            background: '#ffffff',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: '12px',
            padding: '12px',
            marginBottom: '10px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#6b7a8d', marginBottom: '5px' }}>
              Checklist completado
            </div>
            <div style={{ fontFamily: 'Bebas Neue', fontSize: '38px', color: '#1a1a2e', lineHeight: 1 }}>
              {completedChecks} / {totalChecks}
            </div>
            <div style={{ height: '5px', background: '#e0e0e0', borderRadius: '3px', marginTop: '8px' }}>
              <div style={{
                height: '5px',
                borderRadius: '3px',
                background: 'linear-gradient(to right, #26c6da, #66bb6a)',
                width: `${(completedChecks / totalChecks) * 100}%`,
                transition: 'width .4s'
              }} />
            </div>
          </div>

          {[
            { title: 'Esta semana', color: '#6a1b9a', items: [
              { icon: '💳', text: 'Cargar saldo Cashless', sub: '$25.000–35.000 por persona' },
              { icon: '🎵', text: 'Escuchar playlist Hedberg', sub: 'Doechii + Sabrina obligatorio' },
              { icon: '📱', text: 'Screenshot del mapa y guía', sub: 'Para usarla sin internet' },
              { icon: '🤝', text: 'Acordar punto de encuentro', sub: 'M1 Matta · 16:00 · 19:40 · 22:05' },
              { icon: '🔋', text: 'Cargar powerbank completo', sub: 'Máx 20.000 mAh' },
            ]},
            { title: 'Viernes — antes de salir', color: '#c47d00', items: [
              { icon: '🧴', text: 'Bloqueador solar SPF 50+', sub: '29°C en la tarde' },
              { icon: '👟', text: 'Zapatillas cómodas', sub: 'Caminarán 4–6 km' },
              { icon: '🧥', text: 'Chaqueta en la mochila', sub: 'Baja a 15°C después de las 22:00' },
              { icon: '💧', text: 'Botella reutilizable vacía 500cc', sub: 'Agua gratis en todo el recinto' },
              { icon: '💎', text: 'Pulsera Cashless puesta y cargada', sub: 'Verificar saldo antes de entrar' },
              { icon: '📱', text: 'Ticket descargado sin internet', sub: 'Screenshot del QR' },
              { icon: '🪪', text: 'Carnet de identidad', sub: 'Para Budgarden +18' },
              { icon: '🖊️', text: 'Número en la muñeca con plumón', sub: 'Plan sin señal' },
            ]},
            { title: 'En el festival', color: '#1b7a3a', items: [
              { icon: '🛍️', text: 'Lolla Store antes de las 18:00', sub: 'Merch se acaba rápido' },
              { icon: '📸', text: 'Foto grupal Hedberg antes de las 18:00', sub: 'Con luz natural' },
              { icon: '🍔', text: 'Cenar entre 19:30–19:45', sub: 'Antes de Doechii' },
              { icon: '🌟', text: 'Juntarse 23:25 en Sabrina', sub: 'Para salir juntos por Tupper' },
            ]},
          ].map((group, gi) => (
            <div key={gi} style={{ marginBottom: '12px' }}>
              <div style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#6b7a8d', marginBottom: '7px', color: group.color }}>
                {group.title}
              </div>
              {group.items.map((item, ii) => {
                const checkIndex = gi * 10 + ii
                return (
                  <div
                    key={ii}
                    onClick={() => toggleCheck(checkIndex)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 11px',
                      background: '#ffffff',
                      border: '1px solid rgba(0,0,0,0.08)',
                      borderRadius: '11px',
                      marginBottom: '5px',
                      cursor: 'pointer',
                      opacity: checklist[checkIndex] ? 0.4 : 1
                    }}
                  >
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '6px',
                      border: '1.5px solid #ccc',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      color: checklist[checkIndex] ? '#fff' : 'transparent',
                      background: checklist[checkIndex] ? '#66bb6a' : 'transparent',
                      transition: 'all .2s'
                    }}>✓</div>
                    <span style={{ fontSize: '15px', flexShrink: 0 }}>{item.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '12px', fontWeight: '600', textDecoration: checklist[checkIndex] ? 'line-through' : 'none' }}>{item.text}</div>
                      <div style={{ fontSize: '10px', color: '#6b7a8d', marginTop: '1px' }}>{item.sub}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}